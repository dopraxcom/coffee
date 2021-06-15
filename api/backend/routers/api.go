package routers

import (
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/services"
	"log"
	"net/http"
)

func Router() {
	r := services.RunnerICoffeeService()

	r.HandleFunc("/users", users.GetAllAdminUsers).Methods("GET")

	log.Fatal(http.ListenAndServe(":9006", r))
}
