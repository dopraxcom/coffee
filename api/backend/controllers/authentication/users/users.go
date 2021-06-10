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
	token, err := r.Cookie("token")
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
	//return
	//}

	users, err := user.GetAllAdminUsers(params)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(users)
}

func GetAdminInfo(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	token, err := r.Cookie("token")
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

	admin, err := user.GetAdminInfo(params["id"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(admin)
}

func DeleteAdmin(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	token, err := r.Cookie("token")
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

	err = user.DeleteAdmin(params["id"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}
