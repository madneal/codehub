# GORM First Project

A simple Go application using Gin framework and GORM with MySQL.

## Features

- REST API with Gin framework
- Database operations with GORM
- MySQL database
- Docker containerization
- User management with group relationships

## Quick Start

### Using Docker for Database Only

1. Navigate to the project directory:
   ```bash
   cd gorm_first
   ```

2. Start the MySQL database with Docker:
   ```bash
   docker-compose up -d
   ```

3. Run the Go application locally:
   ```bash
   go mod tidy
   go run main.go
   ```

4. The application will be available at `http://localhost:8080`

### API Endpoints

- `GET /users?group_id=1`

### Environment Variables

- `DB_HOST`: Database host (default: mysql)
- `DB_USER`: Database user (default: root)
- `DB_PASSWORD`: Database password (default: password)
- `DB_NAME`: Database name (default: gorm_first)
- `DB_PORT`: Database port (default: 3307)
- `PORT`: Application port (default: 8080)

## Development

To run the application locally:

1. Start the MySQL database:
   ```bash
   ./debug.sh
   ```

2. Install Go dependencies:
   ```bash
   go mod tidy
   ```

3. Run the application:
   ```bash
   go run main.go
   ```

## Debugging in GoLand

1. Start the MySQL database:
   ```bash
   ./debug.sh
   ```

2. In GoLand, create a new Run Configuration:
   - Go to `Run` → `Edit Configurations...`
   - Click `+` and select `Go Build`
   - Set the following:
     - **Name**: `Debug GORM First`
     - **Run kind**: `File`
     - **Files**: Select `main.go`
           - **Environment variables**:
        ```
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=password
        DB_NAME=gorm_first
        DB_PORT=3307
        PORT=8080
        ```

3. Set breakpoints in your code

4. Click the debug button (bug icon) to start debugging

### Debugging Tips

- Set breakpoints in the `UsersHandler` function to debug the API logic
- Use the GoLand debugger to inspect variables and step through code
- Check the database connection in the `initDB()` function
- Monitor HTTP requests using GoLand's HTTP client or external tools like Postman 