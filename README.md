# Louise · Mon atelier de révision

Application web de révision de français, niveau 5e, utilisable sur iPad, iPhone et ordinateur. Première séquence : **Les Fourberies de Scapin**.

## Disponible

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

Le programme de français de 5e applicable à la rentrée 2026 est la référence. Cette application couvre une séquence de théâtre, pas toutes les matières ni l'ensemble du français. Les consignes du professeur restent prioritaires. Les documents de cours du partage initial n'étaient pas accessibles : aucune correspondance exacte avec ces documents n'est affirmée.

Sources :
- [BO du 5 mars 2026](https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A).
- [Annexe du programme de français](https://www.education.gouv.fr/sites/default/files/document/Annexe%201%20%E2%80%93%20Programme%20de%20fran%C3%A7ais%20pour%20le%20cycle%204-480713.pdf), entrée théâtre de cinquième.
- [Notice BnF des Fourberies de Scapin](https://catalogue.bnf.fr/ark:/12148/cb12187074h).

## Limites de cette version

Pas de génération IA, de lecture automatique de PDF/photos, de gestion des autres matières ou de notation automatique de rédaction. L'examen blanc est un sujet fixe ; recommencer le même sujet mesure l'entraînement, pas une évaluation indépendante. Les notes personnelles sont locales et ne figurent pas dans l'export des réponses. L'accès hors ligne sur un iPad administré dépend des règles de l'école.

Les résultats automatiques sont des indicateurs d'entraînement, pas des notes certifiées : le navigateur peut être modifié par son utilisateur.
