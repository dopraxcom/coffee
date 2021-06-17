package routers

import (
	"github.com/khorasany/coffee/api/backend/controllers/authentication/login"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/permissions"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/register"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/services"
	"log"
	"net/http"
)

func Router() {
	r := services.RunnerICoffeeService()

	r.HandleFunc("/admins", users.GetAllAdminUsers).Methods("GET")
	r.HandleFunc("/delete/{id}", users.DeleteAdmin).Methods("DELETE").PathPrefix("/admin")
	r.HandleFunc("/{id}", users.GetAdminInfo).Methods("GET").PathPrefix("/admin")
	r.HandleFunc("/register", register.CreateAdminUser).Methods("POST").PathPrefix("/admin")
	r.HandleFunc("/login", login.LoginAdmin).Methods("POST").PathPrefix("/admin")
	r.HandleFunc("/role/register", permissions.SetRole).Methods("POST").PathPrefix("/admin")
	r.HandleFunc("/role/{role_name}", permissions.GetRole).Methods("POST").PathPrefix("/admin")
	r.HandleFunc("/roles", permissions.GetRoles).Methods("POST").PathPrefix("/admin")

	log.Fatal(http.ListenAndServe(":9006", r))
}
