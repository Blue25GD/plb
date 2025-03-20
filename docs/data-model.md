# Modèle de Données

Ce document détaille la structure de la base de données utilisée par "Préparer le BIA".

## Schéma de la base de données

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│             │       │             │       │             │
│    users    │──┐    │ assessments │       │ challenges  │
│             │  │    │             │       │             │
└─────────────┘  │    └──────┬──────┘       └──────┬──────┘
                 │           │                     │
                 │           │                     │
┌─────────────┐  │    ┌──────┴──────┐              │
│             │  │    │             │              │
│  sessions   │──┘    │ assessment_ │◄─────────────┘
│             │       │ challenges  │
└─────────────┘       │             │
                      └─────────────┘
```

## Tables

### users

Table stockant les informations minimales sur les utilisateurs (anonymes).

| Colonne    | Type         | Description                              |
|------------|--------------|------------------------------------------|
| id         | VARCHAR(36)  | Identifiant unique (UUID)                |
| created_at | TIMESTAMP    | Date de création                         |
| updated_at | TIMESTAMP    | Date de dernière mise à jour             |

### sessions

Table stockant les sessions utilisateur.

| Colonne    | Type         | Description                              |
|------------|--------------|------------------------------------------|
| id         | VARCHAR(36)  | Identifiant unique de session (UUID)     |
| user_id    | VARCHAR(36)  | Référence à l'utilisateur (users.id)     |
| created_at | TIMESTAMP    | Date de création                         |
| expires_at | TIMESTAMP    | Date d'expiration                        |

### assessments

Table stockant les tests/évaluations.

| Colonne    | Type         | Description                              |
|------------|--------------|------------------------------------------|
| id         | VARCHAR(36)  | Identifiant unique du test (UUID)        |
| user_id    | VARCHAR(36)  | Référence à l'utilisateur (users.id)     |
| title      | VARCHAR(255) | Titre du test                            |
| created_at | TIMESTAMP    | Date de création                         |
| updated_at | TIMESTAMP    | Date de dernière mise à jour             |
| completed  | BOOLEAN      | Indique si le test est terminé           |
| score      | DECIMAL(5,2) | Score obtenu (en pourcentage)            |
| time_taken | INTEGER      | Temps passé (en secondes)                |

### challenges

Table stockant les questions individuelles.

| Colonne      | Type         | Description                              |
|--------------|--------------|------------------------------------------|
| id           | VARCHAR(36)  | Identifiant unique de la question (UUID) |
| content      | TEXT         | Contenu de la question                   |
| image_url    | VARCHAR(255) | URL de l'image associée (optionnel)      |
| created_at   | TIMESTAMP    | Date de création                         |
| updated_at   | TIMESTAMP    | Date de dernière mise à jour             |
| choices      | JSON         | Choix possibles, au format : `[{"id":"choice_id","text":"texte","correct":true/false}, ...]` |

### assessment_challenges

Table de jonction entre les tests et les questions.

| Colonne        | Type         | Description                              |
|----------------|--------------|------------------------------------------|
| assessment_id  | VARCHAR(36)  | Référence au test (assessments.id)       |
| challenge_id   | VARCHAR(36)  | Référence à la question (challenges.id)  |
| selected_choice| VARCHAR(36)  | ID du choix sélectionné par l'utilisateur|
| correct        | BOOLEAN      | Indique si la réponse est correcte       |
| points         | INTEGER      | Points obtenus pour cette question       |

## Relations

1. **sessions** → **users**
   - Une session appartient à un utilisateur
   - Un utilisateur peut avoir plusieurs sessions

2. **assessments** → **users**
   - Un test appartient à un utilisateur
   - Un utilisateur peut avoir plusieurs tests

3. **assessment_challenges** → **assessments**
   - Une relation assessment_challenge appartient à un test
   - Un test peut avoir plusieurs relations assessment_challenge

4. **assessment_challenges** → **challenges**
   - Une relation assessment_challenge est liée à une question
   - Une question peut être utilisée dans plusieurs relations assessment_challenge

## Indexation

Les index suivants sont définis pour optimiser les performances :

- `users_id_idx` : Index primaire sur `users.id`
- `sessions_id_idx` : Index primaire sur `sessions.id`
- `sessions_user_id_idx` : Index sur `sessions.user_id`
- `assessments_id_idx` : Index primaire sur `assessments.id`
- `assessments_user_id_idx` : Index sur `assessments.user_id`
- `challenges_id_idx` : Index primaire sur `challenges.id`
- `assessment_challenges_assessment_id_idx` : Index sur `assessment_challenges.assessment_id`
- `assessment_challenges_challenge_id_idx` : Index sur `assessment_challenges.challenge_id`

## Exemples de requêtes SQL

### Récupérer tous les tests d'un utilisateur

```sql
SELECT * FROM assessments 
WHERE user_id = ? 
ORDER BY created_at DESC;
```

### Récupérer un test avec ses questions

```sql
SELECT a.*, c.*
FROM assessments a
JOIN assessment_challenges ac ON a.id = ac.assessment_id
JOIN challenges c ON ac.challenge_id = c.id
WHERE a.id = ?;
```

### Calculer le score d'un test

```sql
SELECT 
  COUNT(*) as total_questions,
  SUM(CASE WHEN ac.correct = true THEN 1 ELSE 0 END) as correct_answers,
  (SUM(CASE WHEN ac.correct = true THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) as score
FROM assessment_challenges ac
WHERE ac.assessment_id = ?;
``` 