package users

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"net/http"
)

func GetAllAdminUsers(w http.ResponseWriter, r *http.Request) {
	// TODO: if first user with super admin permission registered then this section will be enabled
	params := mux.Vars(r)
	//_,_,_,err := jwtToken.AuthenticationJwtToken(params["token"])
	//if err != nil {
	//	w.Header().Set("Content-Type","application/json")
	//	w.WriteHeader(http.StatusUnauthorized)
	//	w.Write([]byte(err.Error()))
	//}

	users, err := user.GetAllAdminUsers(params)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(users)
}

func CreateAdminUser(w http.ResponseWriter, request *http.Request) {
	// TODO: if first user with super admin permission registered then this section will be enabled
	params := mux.Vars(request)
	//_,_,_,err := jwtToken.AuthenticationJwtToken(params["token"])
	//if err != nil {
	//	w.Header().Set("Content-Type","application/json")
	//	w.WriteHeader(http.StatusUnauthorized)
	//	w.Write([]byte(err.Error()))
	//}

	admin, err := user.RegisterAdmin(params)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(admin)
}
