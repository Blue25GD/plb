docker-compose up -d
cd api && npm install && cd ..
cd frontend && npm install && cd ..
cd frontend && npm run build && cd ..
cd api
node bin/executeMigrations.js
npm install -g pm2
cd api && pm2 start 'node .'