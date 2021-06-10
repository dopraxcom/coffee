package login

import (
	"github.com/gorilla/mux"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"github.com/khorasany/coffee/api/backend/services"
	"net/http"
)

func LoginAdmin(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	authenticate, admin := user.LoginAdmin(params)
	if authenticate == false {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
	}
	claims := mapToMapAdminToJwtToken(admin)
	services.SetCookie(w, claims)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
}
