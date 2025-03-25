# Préparer le BIA

Application web pour préparer le Brevet d'Initiation à l'Aéronautique (BIA) avec des épreuves blanches et QCMs générés dynamiquement.

<p align="center">
  <img src="https://github.com/Blue25GD/plb/blob/main/screenshots/1.png" alt="Screenshot 1" width="800"/>
</p>

## 📋 Fonctionnalités

- Sessions anonymes persistantes (aucune inscription requise)
- Support d'images dans les questions
- Interface responsive adaptée aux mobiles
- Possibilité de reprendre un test après fermeture du navigateur
- Tests chronométrés simulant des conditions d'examen réelles
- Résultats détaillés avec feedback sur les réponses

## 🖥️ Screenshots

<p align="center">
  <img src="https://github.com/Blue25GD/plb/blob/main/screenshots/2.png" alt="Screenshot 2" width="400"/>
  <img src="https://github.com/Blue25GD/plb/blob/main/screenshots/3.png" alt="Screenshot 3" width="400"/>
</p>

## 🚀 Démarrage Rapide

### Méthode 1 : Script de déploiement automatisé (recommandé)

Le projet dispose d'un script de déploiement qui automatise toute l'installation :

```bash
# Cloner le dépôt
git clone https://github.com/Blue25GD/plb.git
cd plb

# Rendre les scripts exécutables
chmod +x scripts/*.sh

# Lancer le script de déploiement (installation complète)
npm run deploy
```

Vous pouvez personnaliser le déploiement avec différentes options :
```bash
# Voir toutes les options disponibles
npm run deploy -- --help

# Déployer uniquement le frontend
npm run deploy -- --type frontend-only

# Créer une sauvegarde avant le déploiement
npm run deploy -- --backup
```

### Méthode 2 : Installation manuelle

Pour une installation manuelle, suivez ces étapes :

```bash
# Cloner le dépôt
git clone https://github.com/Blue25GD/plb.git
cd plb

# Configurer l'environnement
cp sample.env .env

# Lancer la base de données
docker-compose up -d

# Installation des dépendances
npm install

# Initialiser la base de données
cd api && node bin/executeMigrations.js && cd ..

# Lancer l'API (dans un terminal)
cd api && npm start

# Lancer le frontend (dans un autre terminal)
cd frontend && npm run dev
```

## 🛠️ Développement

Pour le développement, nous avons mis en place des scripts npm qui simplifient la configuration et le lancement de l'environnement de développement :

```bash
# Configuration initiale de l'environnement de développement
npm run setup

# Lancer tous les services en mode développement
npm run dev

# Lancer tous les services en mode production
npm run start
```

Les scripts npm disponibles sont :
- `npm run setup` : Configure l'environnement de développement (Docker, dépendances, etc.)
- `npm run dev` : Lance tous les services en mode développement
- `npm run start` : Lance tous les services en mode production
- `npm run deploy` : Script de déploiement en production

## 🛠️ Stack Technique

**Client:** 
- [React](https://react.dev/) (v19.0.0) avec [Vite](https://vite.dev/) (v6.2.0)
- CSS moderne avec des animations fluides et des transitions personnalisées
- Interface responsive avec support mobile complet
- Support des polices Roboto, Nunito et JetBrains Mono

**Serveur:** 
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/) (v5.2.1)
- Base de données MySQL avec migrations automatisées
- Support CORS avec @fastify/cors

**Outils de développement:**
- ESLint v9.22.0 avec support TypeScript
- Docker et Docker Compose pour la base de données
- Scripts de déploiement automatisés

## 📚 Documentation

Pour plus d'informations sur la structure du projet, l'architecture et les guides de déploiement, consultez le [dossier de documentation](./docs).

## 🔍 FAQ

**Q: D'autres questions seront-elles ajoutées à l'avenir?**  
R: Oui, l'ajout de nouvelles questions est prévu pour enrichir la base de données.

**Q: Puis-je utiliser ce site pour mon propre usage?**  
R: Absolument, n'hésitez pas à l'utiliser et à l'adapter selon vos besoins.

**Q: Est-ce gratuit?**  
R: Oui, ce projet est et restera gratuit, sans publicités.

## 🚢 Déploiement

Pour déployer l'application en production, consultez le guide détaillé dans [DEPLOY.md](https://github.com/Blue25GD/plb/blob/main/DEPLOY.md) ou dans le [guide de déploiement](./docs/deployment.md).

## 📞 Support et Feedback

Pour toute question, problème ou suggestion, contactez-nous à alexandru@popescu.is.

## 👨‍💻 Auteur

- [@Blue25GD (Alexandru Popescu)](https://www.github.com/Blue25GD)

## 📄 Licence

[Licence MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2025 Alexandru Popescu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.