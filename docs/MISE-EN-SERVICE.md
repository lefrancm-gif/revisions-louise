# Mise en service

## 1. Activer le lien GitHub Pages

Dans ce dépôt : **Settings → Pages → Build and deployment**.

- Source : **Deploy from a branch**.
- Branch : **main**, dossier **/(root)**.
- Enregistrer avec **Save**.

Attendre le déploiement GitHub, puis utiliser le lien indiqué par Pages. L'adresse attendue est `https://lefrancm-gif.github.io/revisions-louise/` ; ne la considérer comme active qu'après vérification du déploiement.

Le code et les exercices génériques sont publics. Les résultats sont conservés dans le navigateur ou dans Supabase, jamais dans GitHub. Le mode local suffit pour essayer l'application immédiatement. GitHub Pages nécessite l'activation par un compte disposant des droits d'administration.

## 2. Préparer les comptes et la synchronisation (facultatif pour commencer)

1. Créer un projet Supabase, choisir une région appropriée, et vérifier les conditions et quotas du plan choisi. La V1 n'utilise aucun service d'IA payant. La disponibilité et les quotas des offres gratuites peuvent évoluer.
2. Exécuter `supabase/schema.sql` puis `supabase/002-weekly-and-courses.sql` dans le SQL Editor du projet neuf. Pour un projet V1 existant, exécuter seulement le deuxième fichier. Les anciennes réponses sont conservées.
3. Désactiver les inscriptions publiques dans les paramètres Auth. Créer deux comptes dans Authentication / Users : un compte parent et un compte élève, avec des adresses contrôlées par le parent et des mots de passe distincts. Ne pas réutiliser le mot de passe GitHub. Ne pas envoyer de mots de passe dans le chat ou le dépôt.
4. Relever les UUID des deux comptes dans Supabase, puis exécuter le bloc ci-dessous en remplaçant les deux UUID. Ne jamais le faire pour des comptes inconnus.

```sql
do $$
declare family uuid;
begin
  insert into public.families default values returning id into family;
  insert into public.members(user_id,family_id,role) values
    ('UUID_DU_PARENT'::uuid,family,'parent'),
    ('UUID_DE_ELEVE'::uuid,family,'learner');
end $$;
```

5. Dans `config.js`, renseigner uniquement l'URL du projet (`https://IDENTIFIANT.supabase.co`) et la clé publique publishable/anon. **Ne jamais utiliser la clé secrète/service_role.** La clé publique n'est pas un mot de passe ; les politiques RLS contrôlent l'accès aux données.
6. Publier les modifications de `config.js`. Incrémenter la version du cache dans `sw.js` lors d'une mise à jour. Fermer tous les onglets de l'application puis la rouvrir.
7. Se connecter avec le compte élève sur l'iPad et le compte parent sur l'iPhone. Une session reste dans l'onglet (sessionStorage), pas dans une mémoire permanente de mot de passe.

Les réponses du mode sans compte restent séparées. Pour les transférer vers le compte élève : exporter avant connexion puis importer une fois connecté à ce compte. Les fiches personnelles et la séance en cours ne sont pas synchronisées. Les résultats se synchronisent après chaque exercice poursuivi, au retour en ligne et via le bouton « Synchroniser maintenant ».

## 3. Vérifications impératives avant l'utilisation familiale

L'intégration n'a pas été testée sur un projet Supabase réel au moment de la livraison. Vérifier avec des comptes de test :

- Sans connexion, les tables ne sont pas lisibles.
- L'élève peut écrire et relire ses résultats.
- Le parent de la même famille peut les lire, mais ne peut pas écrire de résultats.
- Un compte d'une autre famille ne voit aucun de ces résultats.
- Un compte client ne peut modifier ni son rôle ni son appartenance familiale.
- Une déconnexion revient au profil local, sans afficher les résultats du compte connecté.
- Deux synchronisations du même historique ne créent aucun doublon.
- Une réponse faite hors ligne apparaît sur l'autre appareil après reconnexion et synchronisation.

Un seul élève est autorisé par famille dans ce schéma. Les résultats sont des événements immuables identifiés par UUID. Le dernier événement par question détermine l'indicateur de réussite. La date est celle de l'appareil : maintenir les horloges des appareils à jour.

En cas de perte de mot de passe, gérer le compte depuis Supabase ; la V1 ne comporte pas de récupération autonome. Pour supprimer les données d'un compte, utiliser l'administration Supabase (la suppression de l'utilisateur entraîne celle des résultats liés). Le dépôt ne contient aucun identifiant familial.

## 4. Installer sur l'écran d'accueil

Safari → Partager → Sur l'écran d'accueil. L'école peut désactiver cette option ; dans ce cas, ouvrir le site dans Safari. Visiter l'application en ligne une première fois avant de tester le mode avion. Le cache peut être évincé par iOS : il ne remplace pas une sauvegarde.

## Architecture

HTML/CSS/JavaScript natifs, sans dépendances externes chargées dans la page. HTTPS fourni par l'hébergeur. Auth Supabase par mot de passe, renouvellement de jeton de session, API REST PostgREST. Le service worker ne met en cache que les ressources de la même origine, jamais les requêtes Auth ou résultats Supabase. RLS activée sur toutes les tables ; rôle et famille administrés hors navigateur.

Références : [RLS Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security), [Auth Supabase](https://supabase.com/docs/guides/auth).

## Nouveautés V2

Le programme anglais est calculé dans l’application chaque semaine (lundi, date locale), sans tâche serveur ni notification : 3 séances et un bilan, avec rotation de 6 thèmes et de l’ordre des questions. La banque est finie (48 QCM et 6 productions) ; aucune IA ne crée de nouveaux contenus en arrière-plan. Le programme se complète via des dossiers préparés avec l’assistant. Voir FORMAT-REVISION.md.

Le bilan familial sépare les réponses enregistrées des simples ouvertures. Il affiche les sept derniers jours, les séances complètes identifiées depuis la V2, la dernière réponse, la dernière synchronisation réussie et trois points prioritaires. Le taux retient la première réponse par question sur sept jours, hors reprises signalées. Les autoévaluations ne comptent pas dans ce taux. Les seuils affichés sont des repères locaux, pas une prédiction de note ni une certification A2.

La synchronisation V2 nécessite la migration SQL. Tester aussi : création d’un dossier par le parent, lecture par l’élève de la même famille, refus d’écriture par l’élève, refus d’accès d’une autre famille, persistance des métadonnées de séance. Aucun projet Supabase réel n’était configuré lors de la livraison : ces contrôles RLS doivent encore être exécutés avant activation.
