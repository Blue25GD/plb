# Structure du Code

Ce document détaille l'organisation du code source du projet "Préparer le BIA".

## Organisation générale

Le projet est divisé en deux parties principales :

```
preparer-le-bia/
├── frontend/        # Application React client
├── api/             # API Node.js/Fastify
├── docs/            # Documentation du projet
├── screenshots/     # Captures d'écran pour la documentation
├── .env             # Variables d'environnement
├── docker-compose.yaml  # Configuration Docker
└── README.md        # Documentation principale
```

## Frontend (React/Vite)

```
frontend/
├── public/          # Fichiers statiques accessibles publiquement
├── src/             # Code source de l'application
│   ├── assets/      # Images, icônes et autres ressources
│   ├── pages/       # Composants de pages principales
│   │   ├── Index.jsx       # Page d'accueil
│   │   ├── NewAssessment.jsx  # Page de configuration d'un nouveau test
│   │   ├── Assessment.jsx  # Page de test/évaluation
│   │   └── Results.jsx     # Page de résultats
│   ├── App.css      # Styles globaux de l'application
│   ├── config.js    # Configuration de l'application
│   ├── main.jsx     # Point d'entrée de l'application
│   └── index.css    # Styles CSS de base
├── index.html       # Template HTML principal
├── package.json     # Dépendances et scripts
└── vite.config.js   # Configuration de Vite
```

### Composants principaux

- **Index.jsx** : Page d'accueil avec options pour commencer un nouveau test ou reprendre une session
- **NewAssessment.jsx** : Page de configuration d'un nouveau test avec sélection des catégories et du nombre de questions
- **Assessment.jsx** : Page principale du test avec affichage des questions, chronomètre et navigation
- **Results.jsx** : Affichage des résultats et analyse des réponses

### Styles et thèmes

Le projet utilise un système de style moderne avec :
- Polices personnalisées (Roboto, Nunito, JetBrains Mono)
- Animations et transitions fluides
- Design responsive avec support mobile
- Thème cohérent avec des gradients et ombres

## Backend (Node.js/Fastify)

```
api/
├── bin/             # Scripts utilitaires
├── config/          # Fichiers de configuration
├── controllers/     # Contrôleurs pour la logique métier
│   ├── assessment.controller.js  # Gestion des tests
│   ├── competence.controller.js  # Gestion des compétences
│   └── session.controller.js     # Gestion des sessions
├── db/              # Configuration de la base de données
│   ├── migrations/  # Migrations SQL pour la structure de la base
│   └── seeds/      # Données initiales
├── middleware/      # Middleware pour les requêtes
├── models/          # Modèles pour l'accès aux données
│   ├── assessment.js          # Modèle pour les tests
│   ├── assessmentChallenge.js # Relation entre tests et questions
│   ├── challenge.js           # Modèle pour les questions
│   ├── competence.js          # Modèle pour les compétences
│   ├── model.js               # Classe de base pour les modèles
│   ├── session.js             # Modèle pour les sessions
│   └── user.js                # Modèle pour les utilisateurs
├── routes/          # Définition des routes API
│   ├── assessment.routes.js   # Routes pour les tests
│   ├── index.js               # Point d'entrée des routes
│   └── session.routes.js      # Routes pour les sessions
├── services/        # Services réutilisables
├── index.js         # Point d'entrée de l'API
└── server.js        # Configuration du serveur Fastify
```

### Routes API principales

- **/api/sessions** : Gestion des sessions utilisateur
- **/api/assessments** : Gestion des tests et questions
- **/api/assessments/:id/submit** : Soumission des réponses et obtention des résultats

## Flux de données

### Création d'une nouvelle session

1. Le client demande une nouvelle session via `/api/sessions`
2. `session.controller.js` crée une nouvelle session
3. L'identifiant de session est renvoyé et stocké côté client

### Création d'un nouveau test

1. Le client demande un nouveau test via `/api/assessments`
2. `assessment.controller.js` utilise le modèle `assessment.js` pour créer un test
3. Le modèle sélectionne des questions aléatoires via `challenge.js`
4. Les questions sont renvoyées au client pour affichage

### Soumission des réponses

1. Le client envoie les réponses via `/api/assessments/:id/submit`
2. `assessment.controller.js` évalue les réponses
3. Les résultats sont calculés et stockés en base de données
4. Les résultats détaillés sont renvoyés au client

## Style de codage

- **Frontend** : Utilisation de React hooks pour la gestion d'état
- **Backend** : Organisation en modèles, contrôleurs et routes
- **Nommage** : camelCase pour les variables et fonctions
- **Documentation** : Commentaires JSDoc pour les fonctions principales

## Base de données

La structure de la base de données inclut les tables suivantes :

- **users** : Informations sur les utilisateurs (anonymes)
- **sessions** : Sessions utilisateur
- **assessments** : Tests/évaluations
- **challenges** : Questions individuelles
- **assessment_challenges** : Association entre tests et questions
- **competences** : Catégories de compétences pour les questions

### Migrations

Le projet utilise un système de migrations SQL pour gérer la structure de la base de données. Les migrations sont exécutées automatiquement lors du déploiement et incluent :

- Création des tables initiales
- Ajout des relations entre les tables
- Mise à jour des structures existantes
- Insertion des données de base (compétences, etc.)

## Sécurité

Le projet implémente plusieurs mesures de sécurité :

- Support CORS configuré via @fastify/cors
- Sessions anonymes sécurisées
- Validation des données entrantes
- Protection contre les injections SQL via requêtes préparées 