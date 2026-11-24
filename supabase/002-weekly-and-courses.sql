-- À exécuter APRÈS schema.sql. Applicable à la V1 existante, sans perte de réponses.
alter table public.attempts add column if not exists metadata jsonb not null default '{}'::jsonb;
create table if not exists public.course_packs (
 family_id uuid not null references public.families(id) on delete cascade,
 id text not null check (id like 'custom-%' and length(id)<=60),
 content jsonb not null check (jsonb_typeof(content)='object' and octet_length(content::text)<=2000000),
 primary key(family_id,id)
);
alter table public.course_packs enable row level security;
revoke all on public.course_packs from anon,authenticated;
grant select,insert,update on public.course_packs to authenticated;
drop policy if exists family_reads_courses on public.course_packs;
create policy family_reads_courses on public.course_packs for select to authenticated using (
 exists(select 1 from public.members m where m.user_id=(select auth.uid()) and m.family_id=course_packs.family_id)
);
drop policy if exists parent_inserts_courses on public.course_packs;
create policy parent_inserts_courses on public.course_packs for insert to authenticated with check (
 exists(select 1 from public.members m where m.user_id=(select auth.uid()) and m.role='parent' and m.family_id=course_packs.family_id)
);
drop policy if exists parent_updates_courses on public.course_packs;
create policy parent_updates_courses on public.course_packs for update to authenticated using (
 exists(select 1 from public.members m where m.user_id=(select auth.uid()) and m.role='parent' and m.family_id=course_packs.family_id)
) with check (
 exists(select 1 from public.members m where m.user_id=(select auth.uid()) and m.role='parent' and m.family_id=course_packs.family_id)
);
