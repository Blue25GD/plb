#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting all services..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Start Docker services
echo "📦 Starting Docker services..."
docker compose up -d

# Start API
echo "🚀 Starting API..."
cd api
npm run start &
API_PID=$!
cd ..

# Start Frontend
echo "🚀 Starting Frontend..."
cd frontend
npm run start &
FRONTEND_PID=$!
cd ..

# Handle graceful shutdown
trap "kill $API_PID $FRONTEND_PID" SIGINT SIGTERM

# Wait for all background processes
wait 