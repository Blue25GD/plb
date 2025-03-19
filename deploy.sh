cp sample.env .env
sed -i 's/changeme/$(openssl rand -base64 32 | tr -d /=+ | cut -c -32)/g' .env
docker compose up -d
cd api && npm install && cd ..
cd frontend && npm install && cd ..
cd frontend && npm run build && cd ..
npm install -g pm2
# wait a few seconds for the database to be ready
echo "Waiting for the database to be ready..."
sleep 25
node bin/executeMigrations.js
