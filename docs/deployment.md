# Guide de Déploiement

Ce guide détaille les étapes nécessaires pour déployer "Préparer le BIA" en production sur un serveur Ubuntu 24.04.

## Prérequis

- Serveur Ubuntu 24.04 LTS
- Nom de domaine (ou sous-domaine)
- Accès SSH au serveur avec privilèges sudo
- Certificat SSL (Let's Encrypt recommandé)

## Préparation du serveur

### 1. Mise à jour du système

```bash
# Connexion au serveur
ssh utilisateur@votre-serveur

# Mise à jour des paquets
sudo apt update
sudo apt upgrade -y
```

### 2. Installation des dépendances système

```bash
# Installer Node.js et npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Vérifier l'installation
node -v
npm -v

# Installer Docker et Docker Compose
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install -y docker-ce
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Installer Apache
sudo apt install -y apache2

# Activer les modules Apache nécessaires
sudo a2enmod proxy proxy_http rewrite ssl
sudo systemctl restart apache2
```

### 3. Installation de PM2 pour la gestion des processus Node.js

```bash
sudo npm install -g pm2
```

## Déploiement de l'application

### 1. Cloner le dépôt

```bash
cd /var/www
sudo git clone https://github.com/Blue25GD/plb.git
cd plb
```

### 2. Configuration de l'environnement

```bash
# Copier le fichier d'environnement d'exemple
sudo cp sample.env .env

# Éditer le fichier avec des valeurs sécurisées
sudo nano .env
```

Configurez les variables d'environnement avec des valeurs appropriées pour la production :

```
DB_HOST=localhost
DB_USER=plb_user
DB_PASSWORD=mot_de_passe_securise
DB_NAME=plb_db
```

### 3. Configuration du frontend

Modifiez le fichier de configuration du frontend pour utiliser l'URL de production de l'API :

```bash
sudo nano frontend/src/config.js
```

```javascript
const config = {
    api_url: "https://api.votre-domaine.com",
}

export {config};
```

### 4. Démarrer la base de données

```bash
sudo docker-compose up -d
```

### 5. Installation des dépendances et build

```bash
# Installation des dépendances backend
cd api
sudo npm install
cd ..

# Installation des dépendances frontend et build
cd frontend
sudo npm install
sudo npm run build
cd ..
```

### 6. Initialisation de la base de données

```bash
cd api
sudo node bin/executeMigrations.js
cd ..
```

### 7. Démarrer l'API avec PM2

```bash
cd api
sudo pm2 start index.js --name "plb-api"
sudo pm2 save
sudo pm2 startup
cd ..
```

## Configuration du serveur web Apache

### 1. Créer la configuration pour le frontend

```bash
sudo nano /etc/apache2/sites-available/plb-frontend.conf
```

```apache
<VirtualHost *:80>
    ServerName votre-domaine.com
    ServerAdmin webmaster@votre-domaine.com

    DocumentRoot /var/www/plb/frontend/dist
    
    <Directory /var/www/plb/frontend/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/plb-frontend-error.log
    CustomLog ${APACHE_LOG_DIR}/plb-frontend-access.log combined
</VirtualHost>
```

### 2. Créer la configuration pour l'API

```bash
sudo nano /etc/apache2/sites-available/plb-api.conf
```

```apache
<VirtualHost *:80>
    ServerName api.votre-domaine.com
    ServerAdmin webmaster@votre-domaine.com

    ProxyPreserveHost On
    ProxyPass / http://localhost:6660/
    ProxyPassReverse / http://localhost:6660/

    ErrorLog ${APACHE_LOG_DIR}/plb-api-error.log
    CustomLog ${APACHE_LOG_DIR}/plb-api-access.log combined
</VirtualHost>
```

### 3. Activer les sites et redémarrer Apache

```bash
sudo a2ensite plb-frontend.conf
sudo a2ensite plb-api.conf
sudo systemctl restart apache2
```

### 4. Créer le fichier .htaccess pour le frontend

```bash
sudo nano /var/www/plb/frontend/dist/.htaccess
```

```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Configuration SSL avec Let's Encrypt

### 1. Installer Certbot

```bash
sudo apt install -y certbot python3-certbot-apache
```

### 2. Obtenir et configurer les certificats SSL

```bash
sudo certbot --apache -d votre-domaine.com -d api.votre-domaine.com
```

Suivez les instructions à l'écran pour terminer la configuration SSL.

## Sécurisation du serveur

### 1. Configurer le pare-feu

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 2. Configurer les droits d'accès

```bash
sudo chown -R www-data:www-data /var/www/plb
sudo chmod -R 755 /var/www/plb
```

## Automatisation du déploiement (optionnel)

Vous pouvez créer un script de déploiement pour faciliter les mises à jour futures :

```bash
sudo nano /var/www/plb/deploy.sh
```

```bash
#!/bin/bash

# Arrêter en cas d'erreur
set -e

# Aller dans le répertoire du projet
cd /var/www/plb

# Récupérer les dernières modifications
git pull

# Mettre à jour les dépendances
cd api && npm install && cd ..
cd frontend && npm install && cd ..

# Construire le frontend
cd frontend && npm run build && cd ..

# Redémarrer le serveur API
cd api && pm2 restart plb-api && cd ..

# Mettre à jour les permissions
chown -R www-data:www-data /var/www/plb
chmod -R 755 /var/www/plb

echo "Déploiement terminé avec succès!"
```

Rendre le script exécutable :

```bash
sudo chmod +x /var/www/plb/deploy.sh
```

## Vérification du déploiement

1. Accédez à votre site à `https://votre-domaine.com`
2. Vérifiez que l'API fonctionne en naviguant sur le site
3. Testez le processus complet en créant un nouveau test

## Maintenance

### Monitoring

```bash
# Vérifier l'état de l'API
sudo pm2 status
sudo pm2 logs plb-api

# Vérifier les logs Apache
sudo tail -f /var/log/apache2/plb-frontend-error.log
sudo tail -f /var/log/apache2/plb-api-error.log
```

### Sauvegardes

```bash
# Sauvegarde de la base de données
sudo docker exec -it plb_db_1 mysqldump -u plb_user -p plb_db > backup_$(date +%F).sql
```

### Mise à jour de l'application

```bash
cd /var/www/plb
sudo git pull
cd frontend && sudo npm install && sudo npm run build && cd ..
cd api && sudo npm install && sudo pm2 restart plb-api && cd ..
```

## Résolution des problèmes

### Problème : Erreur 502 Bad Gateway

Vérifiez que :
- Le serveur API est en cours d'exécution (`pm2 status`)
- Les fichiers de log pour identifier l'erreur (`pm2 logs plb-api`)
- Les configurations Apache sont correctes

### Problème : Page blanche sur le frontend

Vérifiez que :
- Le build du frontend a été généré correctement
- Le fichier .htaccess est présent dans le répertoire dist
- Les permissions des fichiers sont correctes 