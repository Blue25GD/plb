docker compose up -d
cd api && npm install && cd ..
cd frontend && npm install && cd ..
cd frontend && npm run build && cd ..
npm install -g pm2
# wait a few seconds for the database to be ready
echo "Waiting for the database to be ready..."
sleep 10
node bin/executeMigrations.js
