#!/bin/bash

echo "Starting MySQL database..."

docker-compose up -d

echo "Database is running on localhost:3307"
echo "You can now run the Go application locally in GoLand for debugging"
echo ""
echo "To stop the database: docker-compose down" 