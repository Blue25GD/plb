#!/bin/bash

# Exit on error
set -e

echo "🚀 Setting up development environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Start Docker services
echo "📦 Starting Docker services..."
docker compose up -d

# Install dependencies for API
echo "📦 Installing API dependencies..."
cd api
npm install
cd ..

# Install dependencies for Frontend
echo "📦 Installing Frontend dependencies..."
cd frontend
npm install
cd ..

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

echo "✅ Development environment setup complete!"
echo "You can now run:"
echo "  - npm run dev    to start all services in development mode"
echo "  - npm run start  to start all services in production mode" 