package routers

import (
	"github.com/khorasany/coffee/api/backend/controllers/authentication/login"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/register"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/services"
	"log"
	"net/http"
)

func Router() {
	r := services.RunnerICoffeeService()

	r.HandleFunc("/admins", users.GetAllAdminUsers).Methods("GET")
	r.HandleFunc("/admin/delete/{id}", users.DeleteAdmin).Methods("GET")
	r.HandleFunc("/admin/{id}", users.GetAdminInfo).Methods("GET")
	r.HandleFunc("/admin/register", register.CreateAdminUser).Methods("POST")
	r.HandleFunc("/admin/login", login.LoginAdmin).Methods("POST")

	log.Fatal(http.ListenAndServe(":9006", r))
}
