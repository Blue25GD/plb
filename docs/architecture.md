# Architecture du Projet

## Vue d'ensemble

"Préparer le BIA" est conçu selon une architecture client-serveur moderne avec les composants suivants :

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│             │      │             │      │             │
│   Client    │◄────►│   Serveur   │◄────►│  Base de    │
│   (React)   │      │   (Node.js) │      │  données    │
│             │      │             │      │             │
└─────────────┘      └─────────────┘      └─────────────┘
```

## Composants principaux

### 1. Frontend (React)

Le client est une application React utilisant Vite comme bundler. Il gère :
- L'interface utilisateur
- La navigation et le routage
- L'état local de l'application
- Les interactions utilisateur
- Les appels API vers le backend

Structure principale :
- **Pages** : Composants principaux représentant des routes complètes
- **Assets** : Images et ressources statiques
- **Styles** : Fichiers CSS

### 2. Backend (Node.js avec Fastify)

Le serveur est développé en Node.js avec le framework Fastify. Il est responsable de :
- Traiter les requêtes HTTP
- Gérer la logique métier
- Interagir avec la base de données
- Fournir des API RESTful

Structure principale :
- **Routes** : Définition des endpoints API
- **Controllers** : Logique de traitement des requêtes
- **Models** : Interaction avec la base de données
- **Middleware** : Fonctions intermédiaires de traitement
- **Services** : Logique métier réutilisable

### 3. Base de données (SQL)

La base de données stocke toutes les informations nécessaires :
- Questions et réponses
- Sessions utilisateurs
- Résultats des tests
- Données de configuration

## Flux de données

1. **Authentification et session** :
   - Le client demande une session anonyme au serveur
   - Le serveur génère un identifiant de session et le renvoie
   - Le client stocke l'identifiant pour les requêtes futures

2. **Génération de test** :
   - Le client demande un nouveau test
   - Le serveur sélectionne des questions dans la base de données
   - Les questions sont envoyées au client

3. **Soumission de réponses** :
   - Le client envoie les réponses de l'utilisateur
   - Le serveur évalue les réponses
   - Les résultats sont calculés et stockés
   - Le serveur renvoie les résultats détaillés

## Déploiement

L'application est déployée selon la configuration suivante :

```
┌─────────────────────────────────────────────┐
│                  Serveur                    │
│                                             │
│  ┌─────────────┐        ┌─────────────┐    │
│  │             │        │             │    │
│  │   Apache    │───────►│  Node.js    │    │
│  │   Serveur   │        │  Serveur    │    │
│  │             │        │             │    │
│  └─────────────┘        └──────┬──────┘    │
│         ▲                      │           │
│         │                      │           │
│         │                      ▼           │
│  ┌─────────────┐        ┌─────────────┐    │
│  │             │        │             │    │
│  │  Fichiers   │        │  Base de    │    │
│  │  statiques  │        │  données    │    │
│  │             │        │             │    │
│  └─────────────┘        └─────────────┘    │
│                                             │
└─────────────────────────────────────────────┘
```

- **Apache** sert les fichiers statiques du frontend et agit comme proxy inverse pour l'API
- **Node.js** exécute le serveur d'API
- **Base de données** stocke toutes les données persistantes

## Sécurité

- Sessions anonymes mais sécurisées
- Pas de stockage de données personnelles
- Communication sécurisée par HTTPS (recommandé en production)
- Validation des entrées sur le client et le serveur 