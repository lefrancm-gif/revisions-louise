# Préparer un dossier avec l’assistant

Le parent fournit le cours (photos/PDF/texte), la matière, le niveau, le chapitre et si utile la date du contrôle. Produire un fichier JSON UTF-8 importable depuis « Ajouter des révisions ». Ne pas publier de documents privés ou d'informations personnelles dans ce dépôt public. Les nouveaux contenus génériques peuvent être ajoutés au catalogue après vérification pédagogique.

Structure :

```json
{
  "format": "louise-course-v1",
  "course": {
    "id": "custom-anglais-habitudes",
    "title": "Les habitudes au présent",
    "subject": "Anglais",
    "description": "Préparation du contrôle : présent simple et fréquence.",
    "memos": [{"title": "Présent simple", "body": "I play, she plays. Does she play?"}],
    "questions": [{
      "id": "custom-anglais-habitudes-q1",
      "type": "mcq",
      "topic": "Présent simple",
      "prompt": "She ___ tennis every week.",
      "choices": ["play", "plays", "playing"],
      "answer": 1,
      "memo": "Avec she, le verbe au présent simple prend ici -s : she plays."
    }, {
      "id": "custom-anglais-habitudes-writing1",
      "type": "open",
      "topic": "Production écrite",
      "prompt": "Write four sentences about your usual school day.",
      "criteria": ["J’utilise le présent simple.", "Je donne des repères de fréquence."],
      "memo": "Exemple : I get up at seven. I usually walk to school. Plusieurs réponses sont possibles."
    }]
  }
}
```

L'ID du dossier commence par `custom-`. Chaque ID de question commence par l'ID du dossier suivi d'un tiret. 1 à 300 questions ; 0 à 50 mémos ; 2 à 4 choix par QCM ; `answer` est l'index à partir de 0 ; 1 à 6 critères pour une question ouverte. Le validateur `catalog.js` fait autorité pour les limites de longueur.

Pour compléter un dossier, conserver les identifiants des questions inchangées et ajouter de nouveaux identifiants aux nouvelles questions. Si le sens, les choix ou la correction changent, utiliser un nouvel identifiant pour ne pas attribuer d'anciens résultats au nouveau contenu.

Expliquer les réponses ; éviter les distracteurs ambigus. Proposer des questions de compréhension et d'application, pas uniquement de restitution. L'examen générique sélectionne jusqu'à 15 QCM du dossier et diffère les corrections jusqu'à la fin. Les questions ouvertes se font dans l'entraînement rédigé distinct, avec autoévaluation. Vérifier la source officielle pertinente et préciser ce qui n'est pas couvert. Ne pas présenter un simple QCM comme une certification de niveau linguistique.

Les imports restent locaux sans compte. Avec Supabase configuré, le parent importe puis clique « Synchroniser maintenant ». L'élève synchronise ensuite. Un compte élève ne peut pas publier de dossier familial. La dernière version synchronisée d'un même dossier fait foi ; la V2 ne propose pas d'édition collaborative simultanée ni d'historique des versions de cours.
