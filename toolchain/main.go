package main

import (
	"fmt"
	"log"
	"net/http"
	"runtime"
	"time"

	"github.com/gorilla/mux"
)

func main() {
	fmt.Printf("Go Runtime Version: %s\n", runtime.Version())
	fmt.Printf("Go Compiler: %s\n", runtime.Compiler)
	fmt.Printf("Architecture: %s/%s\n", runtime.GOOS, runtime.GOARCH)
	fmt.Printf("Build Time: %s\n", time.Now().Format("2006-01-02 15:04:05"))

	// 使用 Go 1.21.1 兼容的特性
	router := mux.NewRouter()

	router.HandleFunc("/", homeHandler).Methods("GET")
	router.HandleFunc("/version", versionHandler).Methods("GET")

	fmt.Println("\nServer starting on :8080...")
	fmt.Println("Visit: http://localhost:8080")
	fmt.Println("Visit: http://localhost:8080/version")

	log.Fatal(http.ListenAndServe(":8080", router))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	// 使用 Go 1.21.1 的语法特性
	response := struct {
		Message   string `json:"message"`
		GoVersion string `json:"go_version"`
		BuildInfo string `json:"build_info"`
		Timestamp string `json:"timestamp"`
	}{
		Message:   "Hello from Go toolchain sample!",
		GoVersion: runtime.Version(),
		BuildInfo: fmt.Sprintf("%s/%s", runtime.GOOS, runtime.GOARCH),
		Timestamp: time.Now().Format(time.RFC3339),
	}

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{
        "message": "%s",
        "go_version": "%s", 
        "build_info": "%s",
        "timestamp": "%s"
    }`, response.Message, response.GoVersion, response.BuildInfo, response.Timestamp)
}

func versionHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain")
	fmt.Fprintf(w, "Runtime Version: %s\n", runtime.Version())
	fmt.Fprintf(w, "Compiler: %s\n", runtime.Compiler)
	fmt.Fprintf(w, "Architecture: %s/%s\n", runtime.GOOS, runtime.GOARCH)
}
