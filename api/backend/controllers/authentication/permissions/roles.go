package permissions

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/models/authentication/permissions"
	"net/http"
)

func SetRole(w http.ResponseWriter, r *http.Request) {
	request := mux.Vars(r)
	//token, err := request.Cookie("token")
	//if err != nil {
	//	if err == http.ErrNoCookie {
	//		w.WriteHeader(http.StatusUnauthorized)
	//		return
	//	}
	//	w.WriteHeader(http.StatusBadRequest)
	//	return
	//}
	//
	//_, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	//if err != nil {
	//	w.Header().Set("Content-Type", "application/json")
	//	w.WriteHeader(http.StatusUnauthorized)
	//	w.Write([]byte(err.Error()))
	//}

	roleModel := users.RoleParamToModel(request)
	err := permissions.RegisterRole(roleModel)
	if err != nil {
		w.Header().Set("Content-type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(roleModel)
}
