# API Reference

Ce document décrit les différents endpoints de l'API "Préparer le BIA" et leur utilisation.

## Base URL

Par défaut, l'API est accessible à l'adresse suivante :

```
http://localhost:6660
```

En production, l'URL dépend de votre configuration d'hébergement, généralement :

```
https://api.votre-domaine.com
```

## Authentification

L'API utilise un système de sessions anonymes. Pour accéder à la plupart des endpoints, vous devez inclure l'identifiant de session dans l'en-tête `Authorization` :

```
Authorization: Bearer SESSION_ID
```

## Formats de réponse

Toutes les réponses sont au format JSON avec la structure suivante en cas de succès :

```json
{
  "data": { ... },  // Données de la réponse (varie selon l'endpoint)
  "success": true   // Indicateur de succès
}
```

En cas d'erreur :

```json
{
  "error": "Message d'erreur",
  "success": false
}
```

## Endpoints

### Sessions

#### Créer une nouvelle session

```
POST /api/sessions
```

Crée une nouvelle session anonyme.

**Réponse**

```json
{
  "data": {
    "id": "session_id_unique",
    "created": "2023-03-01T12:00:00Z"
  },
  "success": true
}
```

### Assessments (Tests)

#### Créer un nouveau test

```
POST /api/assessments
```

Crée un nouveau test avec des questions générées aléatoirement.

**Headers**

```
Authorization: Bearer SESSION_ID
```

**Réponse**

```json
{
  "data": {
    "id": "assessment_id",
    "title": "Test BIA",
    "created": "2023-03-01T12:00:00Z",
    "questions": [
      {
        "id": "question_id_1",
        "content": "Texte de la question",
        "image": "url_de_l_image_optionnelle",
        "choices": [
          {
            "id": "choice_id_1",
            "text": "Choix 1"
          },
          {
            "id": "choice_id_2",
            "text": "Choix 2"
          },
          // ... autres choix
        ]
      },
      // ... autres questions
    ]
  },
  "success": true
}
```

#### Récupérer un test existant

```
GET /api/assessments/:id
```

Récupère les détails d'un test existant.

**Headers**

```
Authorization: Bearer SESSION_ID
```

**Paramètres de l'URL**

- `id` : Identifiant unique du test

**Réponse**

Même format que la création d'un test.

#### Soumettre les réponses d'un test

```
POST /api/assessments/:id/submit
```

Soumet les réponses pour un test et retourne les résultats.

**Headers**

```
Authorization: Bearer SESSION_ID
```

**Paramètres de l'URL**

- `id` : Identifiant unique du test

**Corps de la requête**

```json
{
  "answers": [
    {
      "question_id": "question_id_1",
      "answer_id": "choice_id_2"
    },
    // ... autres réponses
  ]
}
```

**Réponse**

```json
{
  "data": {
    "id": "result_id",
    "assessment_id": "assessment_id",
    "score": 75, // Score en pourcentage
    "total_questions": 20,
    "correct_answers": 15,
    "completion_time": 1800, // Temps en secondes
    "details": [
      {
        "question_id": "question_id_1",
        "correct": true,
        "points": 1,
        "selected_answer": "choice_id_2",
        "correct_answer": "choice_id_2"
      },
      // ... autres détails
    ]
  },
  "success": true
}
```

#### Récupérer l'historique des tests

```
GET /api/assessments/history
```

Récupère l'historique des tests pour la session courante.

**Headers**

```
Authorization: Bearer SESSION_ID
```

**Réponse**

```json
{
  "data": {
    "history": [
      {
        "id": "assessment_id_1",
        "title": "Test BIA",
        "created": "2023-03-01T12:00:00Z",
        "completed": true,
        "score": 75
      },
      // ... autres tests
    ]
  },
  "success": true
}
```

## Codes d'erreur

- `400 Bad Request` : Requête invalide (paramètres manquants ou incorrects)
- `401 Unauthorized` : Session invalide ou expirée
- `404 Not Found` : Ressource non trouvée
- `500 Internal Server Error` : Erreur interne du serveur

## Limites

- Maximum de 10 requêtes par seconde par IP
- Durée de validité d'une session : 30 jours
- Taille maximale des payloads : 1MB 