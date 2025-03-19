cp sample.env .env
sed -i "s/changeme/$(openssl rand -hex 16)/" .env
docker compose up -d
cd api && npm install && cd ..
cd frontend && npm install && cd ..
cd frontend && npm run build && cd ..
npm install -g pm2
# wait a few seconds for the database to be ready
echo "Waiting for the database to be ready..."
sleep 25
cd api && node bin/executeMigrations.js && cd ..
cd api && chmod +x start.sh && ./start.sh && cd ..
cd frontend/dist || exit 1
touch .htaccess
echo "RewriteEngine On" > .htaccess
echo "RewriteBase /" >> .htaccess
echo "RewriteRule ^index\.html$ - [L]" >> .htaccess
echo "RewriteCond %{REQUEST_FILENAME} !-f" >> .htaccess
echo "RewriteCond %{REQUEST_FILENAME} !-d" >> .htaccess
echo "RewriteRule . /index.html [L]" >> .htaccess
cd ..