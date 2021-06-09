package routers

import (
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/services"
	"log"
	"net/http"
)

//func HandleRequests() {
//	http.HandleFunc("/", services.HomePage)
//	http.HandleFunc("/users", users.GetAllAdminUsers)
//	log.Fatal(http.ListenAndServe(":10034", nil))
//}

func Router() {
	r := services.RunnerICoffeeService()

	r.HandleFunc("/users", users.GetAllAdminUsers).Methods("GET")

	log.Fatal(http.ListenAndServe(":9006", r))
}
