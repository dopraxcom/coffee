package permissions

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	"github.com/khorasany/coffee/api/backend/models/authentication/permissions"
	"net/http"
)

func SetRole(w http.ResponseWriter, r *http.Request) {
	request := mux.Vars(r)
	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(err.Error()))
	}

	if err := permissions.CheckValidRole(request["role_name"]); err != nil {
		w.Header().Set("Content-type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(err.Error()))
		return
	}

	roleModel := users.RoleParamToModel(request)
	if err := permissions.RegisterRole(roleModel); err != nil {
		w.Header().Set("Content-type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(roleModel)
	return
}

func GetRoles(w http.ResponseWriter, r *http.Request) {
	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(err.Error()))
	}

	roles, err := permissions.GetRoles()
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(roles)

	return
}

func GetRole(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)
	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(err.Error()))
	}

	roleModel, err := permissions.GetRole(param["role_name"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(roleModel)

	return
}
