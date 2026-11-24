# Louise · Mon atelier de révision

Application web de révision de français, niveau 5e, utilisable sur iPad, iPhone et ordinateur. Séquences disponibles : **Les Fourberies de Scapin** et **anglais hebdomadaire**.

## Disponible

- Anglais : 3 séances de 10 min environ et un petit bilan par semaine, rotation automatique de 6 thèmes, 48 QCM, 6 productions et 6 mémos.
- Bibliothèque multi-matières et import/export de dossiers préparés avec l’assistant ; formulaire de création sans code.
- Bilan familial : activité sur 7 jours, séances terminées, premières réponses, couverture et priorités du soir.
- Dossiers familiaux synchronisables par le compte parent après configuration et migration Supabase.


- Séance quotidienne de 8 QCM : erreurs prioritaires, notions nouvelles puis anciennes réussites.
- 50 QCM originaux, correction expliquée et mémos ; reprise des questions manquées.
- 6 activités écrites/orales avec corrigé et critères d'autoévaluation distincts du score QCM.
- Examen blanc de 15 QCM, correction seulement à la fin ; complément rédigé séparé.
- 8 fiches mémo et ajout de notes personnelles locales.
- Progression par thème, reprise d'une séance après fermeture, export/import JSON des réponses.
- Interface responsive, navigation clavier, installation depuis Safari si autorisée sur l'appareil.
- Cache hors connexion après première visite réussie (selon le navigateur).

## État des comptes

**Par défaut : mode local, sans compte.** Aucune synchronisation inter-appareils n'est active tant que Supabase n'a pas été configuré. La partie Supabase est implémentée mais doit être validée avec de vrais comptes avant utilisation familiale.

Les sessions et les notes restent locales. Une fois configurés, seuls les résultats/réponses sont synchronisés. Un compte parent peut consulter les résultats d'un compte élève de sa famille. Aucun cours privé ni résultat ne doit être ajouté à ce dépôt public.

Voir [la mise en service](docs/MISE-EN-SERVICE.md) pour GitHub Pages et Supabase.

## Lancer et vérifier

Aucune dépendance npm. Node.js 22+ pour les tests et le build ; Python 3 pour l'aperçu.

```sh
node --test tests/*.test.js
node scripts/build.js
python3 -m http.server 4173 --bind 127.0.0.1
```

Ouvrir http://127.0.0.1:4173 (pas `file://`). `dist/` contient les seuls fichiers nécessaires à un hébergement statique. GitHub Pages peut aussi servir la racine de `main` : tous les chemins sont relatifs et compatibles avec `/revisions-louise/`.

## Pédagogie

Le programme de français de 5e applicable à la rentrée 2026 est la référence. Le français couvre une séquence de théâtre. L’anglais propose un socle de consolidation vers A2 en LVA, avec six thèmes, sans prétendre couvrir ou certifier toutes les compétences annuelles. Les consignes du professeur restent prioritaires. Les documents de cours du partage initial n'étaient pas accessibles : aucune correspondance exacte avec ces documents n'est affirmée.

Sources :
- [BO du 5 mars 2026](https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A).
- [Annexe du programme de français](https://www.education.gouv.fr/sites/default/files/document/Annexe%201%20%E2%80%93%20Programme%20de%20fran%C3%A7ais%20pour%20le%20cycle%204-480713.pdf), entrée théâtre de cinquième.
- [Notice BnF des Fourberies de Scapin](https://catalogue.bnf.fr/ark:/12148/cb12187074h).

## Limites de cette version

Pas de génération IA en arrière-plan, de lecture automatique de PDF/photos dans le site ni de notation automatique de rédaction. Les cours peuvent être préparés avec l’assistant puis importés. Le programme hebdomadaire réutilise une banque finie ; il ne génère pas de questions inédites chaque semaine. L'examen blanc est un sujet fixe ; recommencer le même sujet mesure l'entraînement, pas une évaluation indépendante. Les notes personnelles sont locales et ne figurent pas dans l'export des réponses. L'accès hors ligne sur un iPad administré dépend des règles de l'école.

Les résultats automatiques sont des indicateurs d'entraînement, pas des notes certifiées : le navigateur peut être modifié par son utilisateur.

## Révisions ajoutées le 24 novembre 2026

Trois dossiers issus des notions des cours retrouvés : nombres relatifs et coordonnées (32 QCM, 4 productions), géométrie (24 QCM, 5 constructions/justifications), croissance démographique (24 QCM, 4 productions). Huit fiches par dossier. Les documents photographiés ne sont pas publiés ; les exercices sont nouvellement rédigés.

L’écran Examens blancs propose trois lots de QCM sans chevauchement et leurs compléments rédigés. Le score automatique reste limité aux QCM. Les tracés et explications sont corrigés avec un adulte et autoévalués. La date du contrôle est modifiable et locale ; aucune notification n’est programmée. Les maths sont préremplies au 26 novembre 2026 et la géographie signalée pour la semaine du 30 novembre, jour à préciser.

Le dossier de relatifs sépare les additions/soustractions complémentaires des bilans centrés sur les deux pages du cours (signes, comparaison, repérage). Le cercle circonscrit au triangle rectangle reprend un complément déjà travaillé, explicitement indiqué comme notion de 4e dans le programme national 2026. Cette banque n’est pas tout le programme annuel de maths.

Vérification : 24 tests Node (contenus, intégrité des questions, programmes, calendrier, sauvegarde et bilan), construction statique et parcours navigateur local. La synchronisation Supabase nécessite toujours une configuration réelle ; aucune validation de connexion familiale en production n’est revendiquée.
