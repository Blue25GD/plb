#!/usr/bin/env bash

# ====================================================================================
# Préparer le BIA - Script de déploiement
# Auteur: Alexandru Popescu
# ====================================================================================

# Configurations
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
LOG_FILE="deployment_${TIMESTAMP}.log"
BACKUP_DIR="backups/${TIMESTAMP}"
DB_CONTAINER="plb_db_1"
API_SERVICE_NAME="plb-api"
DEPLOYMENT_TYPE="full" # Options: full, frontend-only, backend-only, db-only

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ====================================================================================
# Fonctions utilitaires
# ====================================================================================

log() {
    echo -e "${BLUE}[$(date +"%Y-%m-%d %H:%M:%S")]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}[$(date +"%Y-%m-%d %H:%M:%S")] ✓ $1${NC}" | tee -a "$LOG_FILE"
}

warn() {
    echo -e "${YELLOW}[$(date +"%Y-%m-%d %H:%M:%S")] ⚠ $1${NC}" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[$(date +"%Y-%m-%d %H:%M:%S")] ✗ $1${NC}" | tee -a "$LOG_FILE"
}

# Fonction d'aide pour les options
show_help() {
    echo "Usage: $0 [options]"
    echo
    echo "Options:"
    echo "  -h, --help                 Afficher cette aide"
    echo "  -t, --type TYPE            Type de déploiement: full, frontend-only, backend-only, db-only"
    echo "                             (défaut: full)"
    echo "  -b, --backup               Créer une sauvegarde de la base de données avant le déploiement"
    echo "  -s, --skip-deps            Ignorer l'installation des dépendances"
    echo "  -e, --env FILE             Utiliser un fichier d'environnement spécifique"
    echo
    exit 0
}

# Fonction pour créer une sauvegarde de la base de données
backup_database() {
    log "Création d'une sauvegarde de la base de données..."
    
    # Créer le répertoire de sauvegarde s'il n'existe pas
    mkdir -p "$BACKUP_DIR"
    
    # Vérifier si le conteneur de base de données est en cours d'exécution
    if docker ps | grep -q "$DB_CONTAINER"; then
        # Extraire les informations de connexion à partir du fichier .env
        if [[ -f .env ]]; then
            source .env
            docker exec "$DB_CONTAINER" mysqldump -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" > "${BACKUP_DIR}/database_backup.sql"
            if [ $? -eq 0 ]; then
                success "Sauvegarde de la base de données créée dans ${BACKUP_DIR}/database_backup.sql"
            else
                error "Échec de la sauvegarde de la base de données"
                return 1
            fi
        else
            error "Fichier .env introuvable. Impossible de récupérer les informations de connexion à la base de données."
            return 1
        fi
    else
        error "Conteneur de base de données non trouvé ou non démarré."
        return 1
    fi
    
    return 0
}

# Fonction pour vérifier les prérequis
check_prerequisites() {
    log "Vérification des prérequis..."
    
    # Vérifier que Docker est installé
    if ! command -v docker &> /dev/null; then
        error "Docker n'est pas installé. Veuillez l'installer avant de continuer."
        return 1
    fi
    
    # Vérifier que Docker Compose est installé
    if ! command -v docker compose &> /dev/null; then
        error "Docker Compose n'est pas installé. Veuillez l'installer avant de continuer."
        return 1
    fi
    
    # Vérifier que Node.js est installé
    if ! command -v node &> /dev/null; then
        error "Node.js n'est pas installé. Veuillez l'installer avant de continuer."
        return 1
    fi
    
    # Vérifier que npm est installé
    if ! command -v npm &> /dev/null; then
        error "npm n'est pas installé. Veuillez l'installer avant de continuer."
        return 1
    fi
    
    success "Tous les prérequis sont installés."
    return 0
}

# Fonction pour configurer l'environnement
setup_environment() {
    log "Configuration de l'environnement..."
    
    if [[ -n $ENV_FILE && -f $ENV_FILE ]]; then
        log "Utilisation du fichier d'environnement $ENV_FILE"
        cp "$ENV_FILE" .env
    else
        log "Création d'un fichier .env à partir de sample.env"
        cp sample.env .env
        # Générer un mot de passe sécurisé pour la base de données
        sed -i "s/changeme/$(openssl rand -hex 16)/" .env
    fi
    
    success "Fichier d'environnement configuré."
}

# Fonction pour démarrer la base de données
start_database() {
    log "Démarrage de la base de données..."
    
    docker compose up -d
    
    # Attendre que la base de données soit prête
    log "Attente du démarrage de la base de données..."
    
    # Vérifier si le conteneur est démarré
    for i in {1..30}; do
        if ! docker ps | grep -q "$DB_CONTAINER"; then
            error "Le conteneur de base de données n'est pas démarré."
            return 1
        fi
        
        # Tester si MySQL est prêt à accepter des connexions
        if docker exec "$DB_CONTAINER" mysqladmin ping -h localhost --silent; then
            success "Base de données démarrée et prête à accepter des connexions."
            return 0
        fi
        
        log "Attente que la base de données soit prête ($i/30)..."
        sleep 5
    done
    
    error "La base de données n'est pas prête après 150 secondes."
    return 1
}

# Fonction pour installer les dépendances
install_dependencies() {
    if [ "$SKIP_DEPS" = true ]; then
        warn "Installation des dépendances ignorée."
        return 0
    fi
    
    log "Installation des dépendances backend..."
    cd api && npm install && cd ..
    if [ $? -ne 0 ]; then
        error "Échec de l'installation des dépendances backend."
        return 1
    fi
    
    log "Installation des dépendances frontend..."
    cd frontend && npm install && cd ..
    if [ $? -ne 0 ]; then
        error "Échec de l'installation des dépendances frontend."
        return 1
    fi
    
    success "Dépendances installées avec succès."
    return 0
}

# Fonction pour construire le frontend
build_frontend() {
    log "Construction du frontend..."
    
    cd frontend && npm run build && cd ..
    if [ $? -ne 0 ]; then
        error "Échec de la construction du frontend."
        return 1
    fi
    
    # Vérifier que le fichier .htaccess existe
    if [ ! -f "frontend/dist/.htaccess" ]; then
        log "Création du fichier .htaccess..."
        cat > frontend/dist/.htaccess << 'EOF'
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
EOF
    fi
    
    success "Frontend construit avec succès."
    return 0
}

# Fonction pour initialiser la base de données
initialize_database() {
    log "Initialisation de la base de données..."
    
    cd api && npm run migrate && cd ..
    if [ $? -ne 0 ]; then
        error "Échec de l'initialisation de la base de données."
        return 1
    fi
    
    success "Base de données initialisée avec succès."
    return 0
}

# Fonction pour démarrer l'API
start_api() {
    log "Démarrage de l'API..."
    
    # Vérifier si PM2 est installé
    if ! command -v pm2 &> /dev/null; then
        log "Installation de PM2..."
        npm install -g pm2
        if [ $? -ne 0 ]; then
            error "Échec de l'installation de PM2."
            return 1
        fi
    fi
    
    # Démarrer ou redémarrer l'API avec PM2
    cd api
    if pm2 list | grep -q "$API_SERVICE_NAME"; then
        log "Redémarrage de l'API..."
        pm2 restart "$API_SERVICE_NAME"
    else
        log "Démarrage initial de l'API..."
        pm2 start index.js --name "$API_SERVICE_NAME"
    fi
    
    # Sauvegarder la configuration PM2
    pm2 save
    
    # Configuration du démarrage automatique
    log "Configuration du démarrage automatique de PM2..."
    pm2 startup | grep -v "root" | bash
    
    cd ..
    
    success "API démarrée avec succès."
    return 0
}

# Fonction pour mettre à jour les permissions
update_permissions() {
    log "Mise à jour des permissions..."
    
    # Si nous sommes sur un serveur de production, mettre à jour les permissions
    if [ -d "/var/www" ]; then
        chown -R www-data:www-data .
        chmod -R 755 .
        success "Permissions mises à jour."
    else
        warn "Non exécuté sur un serveur de production, permissions non modifiées."
    fi
    
    return 0
}

# Fonction pour vérifier le déploiement
verify_deployment() {
    log "Vérification du déploiement..."
    
    # Vérifier que le frontend a été construit
    if [ ! -d "frontend/dist" ]; then
        error "Le build du frontend n'a pas été trouvé."
        return 1
    fi
    
    # Vérifier que l'API est en cours d'exécution
    if ! pm2 list | grep -q "$API_SERVICE_NAME"; then
        error "L'API n'est pas en cours d'exécution."
        return 1
    fi
    
    # Vérifier que la base de données est accessible
    if ! docker ps | grep -q "$DB_CONTAINER"; then
        error "Le conteneur de base de données n'est pas en cours d'exécution."
        return 1
    fi
    
    success "Déploiement vérifié avec succès."
    return 0
}

# ====================================================================================
# Traitement des arguments de ligne de commande
# ====================================================================================

# Initialisation des options
DO_BACKUP=false
SKIP_DEPS=false
ENV_FILE=""

# Analyser les options de ligne de commande
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            ;;
        -t|--type)
            DEPLOYMENT_TYPE="$2"
            shift 2
            ;;
        -b|--backup)
            DO_BACKUP=true
            shift
            ;;
        -s|--skip-deps)
            SKIP_DEPS=true
            shift
            ;;
        -e|--env)
            ENV_FILE="$2"
            shift 2
            ;;
        *)
            error "Option inconnue: $1"
            echo "Utilisez '$0 --help' pour voir les options disponibles."
            exit 1
            ;;
    esac
done

# Vérifier que le type de déploiement est valide
case $DEPLOYMENT_TYPE in
    full|frontend-only|backend-only|db-only)
        log "Type de déploiement: $DEPLOYMENT_TYPE"
        ;;
    *)
        error "Type de déploiement invalide: $DEPLOYMENT_TYPE"
        echo "Types valides: full, frontend-only, backend-only, db-only"
        exit 1
        ;;
esac

# ====================================================================================
# Exécution principale
# ====================================================================================

log "Début du déploiement (type: $DEPLOYMENT_TYPE)..."

# Vérifier les prérequis
check_prerequisites || exit 1

# Créer une sauvegarde si demandé
if [ "$DO_BACKUP" = true ]; then
    backup_database || warn "La sauvegarde a échoué, mais le déploiement va continuer."
fi

# Configurer l'environnement
setup_environment || exit 1

# Effectuer le déploiement selon le type
case $DEPLOYMENT_TYPE in
    full)
        start_database || exit 1
        install_dependencies || exit 1
        build_frontend || exit 1
        initialize_database || exit 1
        start_api || exit 1
        update_permissions || exit 1
        ;;
    frontend-only)
        install_dependencies || exit 1
        build_frontend || exit 1
        update_permissions || exit 1
        ;;
    backend-only)
        start_database || exit 1
        install_dependencies || exit 1
        start_api || exit 1
        update_permissions || exit 1
        ;;
    db-only)
        start_database || exit 1
        initialize_database || exit 1
        ;;
esac

# Vérifier le déploiement
verify_deployment || warn "La vérification du déploiement a échoué, mais le processus a été terminé."

success "Déploiement terminé avec succès!"
log "Pour les détails complets, consultez le fichier log: $LOG_FILE"

exit 0