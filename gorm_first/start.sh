#!/bin/bash

echo "Starting GORM First project with Docker Compose..."

docker-compose up --build -d

echo "Application is starting..."
echo "API will be available at: http://localhost:8080"
echo "Database will be available at: localhost:5432"
echo ""
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down" 