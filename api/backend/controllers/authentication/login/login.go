package login

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"github.com/khorasany/coffee/api/backend/services"
	"io/ioutil"
	"net/http"
)

func LoginAdmin(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	adminModel := users.UserAdminParamToModel(params)
	authenticate, admin := user.LoginAdmin(*adminModel)
	if authenticate == false {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
	}
	claims := mapToMapAdminToJwtToken(admin)
	services.SetCookie(w, claims)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
}

func LoginSuperUserAdmin(w http.ResponseWriter, r *http.Request) {
	result, _ := ioutil.ReadAll(r.Body)
	request := make(map[string]string)
	_ = json.Unmarshal(result, &request)

	superAdminModel := users.UserAdminParamToModel(request)
	authenticate, superAdmin := user.LoginSuperUserAdmin(*superAdminModel)
	if authenticate == false {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusNotFound)
	}
	claims := mapToMapAdminToJwtToken(superAdmin)
	services.SetCookie(w, claims)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
}
