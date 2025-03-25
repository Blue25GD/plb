# Deploy

Deploying is done to a Ubuntu 24.04 server.

## Prerequisites

- A server with Ubuntu 24.04 installed (Get one from Hetzner or DigitalOcean, or use your own)
- Node.js installed on the server with the version specified in the `.nvmrc` file
- _A domain name (subdomain is also fine, optional)_
- _A SSL certificate for the domain name (optional, **highly recommended**)_
- Docker + Docker compose installed on the server (latest version)
- Apache2 installed

## Development Setup

For local development, you can use the provided npm scripts to quickly set up your environment:

```bash
# Clone the repository
git clone https://github.com/Blue25GD/plb.git && cd plb

# Make scripts executable
chmod +x scripts/*.sh

# Setup development environment
npm run setup

# Start all services in development mode
npm run dev
```

This will:
1. Start Docker services
2. Install all dependencies (root, API, and frontend)
3. Set up the development environment
4. Run database migrations
5. Start both the API and frontend in development mode

## Production Deployment

1. Clone the repository on the server

```bash
git clone https://github.com/Blue25GD/plb.git && cd plb
```

1.1. Initialize .env files

```bash
cp sample.env .env
```

> ⚠️ **MAKE SURE TO EDIT THE `.env` FILE**
>
> ⚠️ **DEPLOYING WITHOUT EDITING THE `.env` FILE MAY CASE MAJOR SECURITY ISSUES**

1.2. Update the frontend config (`/frontend/src/config.js`) to use the correct API URL

```javascript
const config = {
    // Make sure this URL is publicly accessible, as it will be used by the client
    api_url: "http://CHANGEME:6660",
}

export {config};
```

The following can all be done using the `npm run deploy` command, all up to the 6th step.

---

2. Start docker

```bash
docker-compose up -d
```

3. Install dependencies

```bash
npm install
```

4. Build the client

```bash
cd frontend && npm run build && cd ..
```

5. Setup the database

```bash
cd api && npm run migrate && cd ..
```

5. Start the server (using pm2)

```bash
npm install -g pm2
cd api && pm2 start 'node .'
```

---

6. Setup Apache2

This is different for every usecase, but here is a sample configuration:

```apache
<VirtualHost *:80>
    ServerName bia.yourdomain.com

    DocumentRoot /path/to/plb/frontend/dist
    DirectoryIndex index.html
    <Directory "/path/to/plb/frontend/dist">
        Require all granted
        AllowOverride All
    </Directory>
</VirtualHost>

<VirtualHost *:80>
    ServerName bia-api.yourdomain.com

    ProxyPreserveHost On
    ProxyPass / http://localhost:6660/
    ProxyPassReverse / http://localhost:6660/

    ErrorLog ${APACHE_LOG_DIR}/bia-api_error.log
    CustomLog ${APACHE_LOG_DIR}/bia-api_access.log combined
</VirtualHost>
```

Make sure to enable all the required modules, here is where you setup SSL, etc...

> ⚠️ **Make sure to add a .htaccess file in the frontend/dist folder with the following content:**
>
> ```apache
> RewriteEngine On
> RewriteBase /
> RewriteCond %{REQUEST_FILENAME} !-f
> RewriteCond %{REQUEST_FILENAME} !-d
> RewriteRule . /index.html [L]
> ```
> This Makes the client-side routing work.

Everything should now be ready to go, have fun!

Access the website at your domain name.