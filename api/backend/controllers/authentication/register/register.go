package register

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"net/http"
)

func CreateAdminUser(w http.ResponseWriter, request *http.Request) {
	// TODO: if first user with super admin permission registered then this section will be enabled
	params := mux.Vars(request)
	token, err := request.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	//_,_,_,err := jwtToken.AuthenticationJwtToken(token.Value)
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
