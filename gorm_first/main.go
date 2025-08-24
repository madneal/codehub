package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

type GroupModel struct {
	ID   uint   `json:"id" gorm:"primaryKey"`
	Name string `json:"name"`
}

type UserModel struct {
	ID      uint       `json:"id" gorm:"primaryKey"`
	Name    string     `json:"name"`
	Email   string     `json:"email"`
	GroupID uint       `json:"group_id"`
	Group   GroupModel `json:"group" gorm:"foreignKey:GroupID"`
}

func initDB() {
	dbUser := os.Getenv("DB_USER")
	if dbUser == "" {
		dbUser = "root"
	}

	dbPassword := os.Getenv("DB_PASSWORD")
	if dbPassword == "" {
		dbPassword = "password"
	}

	dbHost := os.Getenv("DB_HOST")
	if dbHost == "" {
		dbHost = "localhost"
	}

	dbPort := os.Getenv("DB_PORT")
	if dbPort == "" {
		dbPort = "3307"
	}

	dbName := os.Getenv("DB_NAME")
	if dbName == "" {
		dbName = "gorm_first"
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local&multiStatements=true",
		dbUser,
		dbPassword,
		dbHost,
		dbPort,
		dbName,
	)

	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	DB.AutoMigrate(&GroupModel{}, &UserModel{})
}

func UsersHandler(c *gin.Context) {
	groupId := c.Query("group_id")

	var group GroupModel
	err := DB.Debug().First(&group, groupId).Error
	if err != nil {
		c.Status(404)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"group": group,
	})
}

func main() {
	initDB()

	r := gin.Default()

	r.GET("/users", UsersHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	r.Run(":" + port)
}
