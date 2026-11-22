-- À exécuter une seule fois dans le SQL Editor d'un nouveau projet Supabase.
-- Les comptes et leur appartenance sont administrés côté serveur, jamais par le navigateur.
create table public.families (id uuid primary key default gen_random_uuid());
create table public.members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  family_id uuid not null references public.families(id) on delete cascade,
  role text not null check (role in ('parent','learner')),
  unique(user_id,family_id)
);
-- Cette version gère un élève par famille.
create unique index one_learner_per_family on public.members(family_id) where role='learner';
create table public.attempts (
  id uuid primary key,
  user_id uuid not null,
  family_id uuid not null,
  question_id text not null check(length(question_id) between 1 and 100),
  correct boolean not null,
  self_assessed boolean not null,
  response text not null check(length(response)<=5000),
  at timestamptz not null,
  created_at timestamptz not null default now(),
  foreign key(user_id,family_id) references public.members(user_id,family_id) on delete cascade
);
create index attempts_family_date on public.attempts(family_id,at,id);
alter table public.families enable row level security;
alter table public.members enable row level security;
alter table public.attempts enable row level security;
revoke all on public.families,public.members,public.attempts from anon,authenticated;
grant select on public.members to authenticated;
grant select,insert on public.attempts to authenticated;
create policy own_membership on public.members for select to authenticated using (user_id=(select auth.uid()));
create policy read_attempts on public.attempts for select to authenticated using (
 user_id=(select auth.uid()) or exists (
   select 1 from public.members m where m.user_id=(select auth.uid()) and m.role='parent' and m.family_id=attempts.family_id
 )
);
create policy insert_own_attempts on public.attempts for insert to authenticated with check (
 user_id=(select auth.uid()) and exists (
   select 1 from public.members m where m.user_id=(select auth.uid()) and m.role='learner' and m.family_id=attempts.family_id
 )
);
-- Aucun droit UPDATE/DELETE ni politique d'écriture sur les membres pour les clients.
