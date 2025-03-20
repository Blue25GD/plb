# Guide d'Installation

Ce guide vous aidera à installer et configurer "Préparer le BIA" sur votre machine locale pour le développement ou les tests.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version recommandée : celle spécifiée dans `.nvmrc`)
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Méthodes d'Installation

Vous pouvez installer le projet de deux façons : en utilisant le script de déploiement automatisé (recommandé) ou en suivant les étapes manuelles.

### Méthode 1 : Script de déploiement automatisé (recommandé)

Le projet dispose d'un script de déploiement (`deploy.sh`) qui automatise tout le processus d'installation :

```bash
# Cloner le dépôt
git clone https://github.com/Blue25GD/plb.git
cd plb

# Rendre le script exécutable
chmod +x deploy.sh

# Lancer le script de déploiement
./deploy.sh
```

Le script effectue automatiquement les opérations suivantes :
- Vérification des prérequis
- Configuration du fichier d'environnement
- Démarrage de la base de données Docker
- Installation des dépendances
- Construction du frontend
- Initialisation de la base de données
- Démarrage de l'API avec PM2

#### Options du script de déploiement

Le script offre plusieurs options pour personnaliser l'installation :

```bash
# Afficher l'aide
./deploy.sh --help

# Types de déploiement
./deploy.sh --type full            # Installation complète (par défaut)
./deploy.sh --type frontend-only   # Uniquement le frontend
./deploy.sh --type backend-only    # Uniquement le backend et la base de données
./deploy.sh --type db-only         # Uniquement la base de données

# Autres options
./deploy.sh --backup               # Créer une sauvegarde avant le déploiement
./deploy.sh --skip-deps            # Ignorer l'installation des dépendances
./deploy.sh --env fichier.env      # Utiliser un fichier d'environnement spécifique
```

### Méthode 2 : Installation manuelle

Si vous préférez installer manuellement ou si vous avez besoin de plus de contrôle sur le processus d'installation, suivez ces étapes :

#### 1. Cloner le dépôt

```bash
git clone https://github.com/Blue25GD/plb.git
cd plb
```

#### 2. Configuration de l'environnement

Créez un fichier `.env` en copiant le fichier exemple :

```bash
cp sample.env .env
```

Ouvrez le fichier `.env` et configurez les variables selon vos besoins :

```
DB_HOST=localhost
DB_USER=plb
DB_PASSWORD=plb
DB_NAME=plb
```

#### 3. Démarrer la base de données

```bash
docker-compose up -d
```

Cette commande lance un conteneur Docker avec une base de données SQL.

#### 4. Installer les dépendances

**Backend (API)**

```bash
cd api
npm install
cd ..
```

**Frontend**

```bash
cd frontend
npm install
cd ..
```

#### 5. Configurer le frontend

Modifiez le fichier `frontend/src/config.js` pour pointer vers votre API locale :

```javascript
const config = {
    api_url: "http://localhost:6660",
}

export {config};
```

#### 6. Initialiser la base de données

```bash
cd api
node bin/executeMigrations.js
cd ..
```

Cette commande crée les tables nécessaires et ajoute les données initiales à la base de données.

#### 7. Lancer l'application

**Démarrer l'API (dans un terminal)**

```bash
cd api
npm start
```

**Démarrer le frontend (dans un autre terminal)**

```bash
cd frontend
npm run dev
```

Une fois lancé, un message s'affichera avec l'URL locale où le site est disponible, généralement `http://localhost:5173`.

## Vérification de l'installation

1. Ouvrez votre navigateur et accédez à l'URL indiquée (généralement `http://localhost:5173`)
2. Vous devriez voir la page d'accueil de l'application
3. Testez la création d'un nouveau test pour vérifier que la communication avec l'API fonctionne correctement

## Résolution des problèmes courants

### Problème : Erreur de connexion à la base de données

Vérifiez que :
- Le conteneur Docker est bien en cours d'exécution (`docker ps`)
- Les variables d'environnement dans `.env` sont correctes
- Le port 3306 n'est pas utilisé par un autre service

### Problème : API inaccessible

Vérifiez que :
- Le serveur API est bien en cours d'exécution
- Le port 6660 n'est pas bloqué par un pare-feu
- La configuration dans `frontend/src/config.js` pointe vers la bonne URL

### Problème : Erreurs lors de l'initialisation de la base de données

Essayez de :
- Vérifier les logs pour identifier l'erreur spécifique
- Redémarrer le conteneur Docker
- Supprimer et recréer la base de données

```bash
docker-compose down -v
docker-compose up -d
```

## Mode Développement

En mode développement :
- Le frontend dispose d'un rechargement à chaud (hot-reload)
- Les modifications du backend nécessitent un redémarrage du serveur (ou utilisez [nodemon](https://nodemon.io/) pour le rechargement automatique) 