package register

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
)

func CreateAdminUser(w http.ResponseWriter, request *http.Request) {
	result, err := ioutil.ReadAll(request.Body)
	r := make(map[string]string)
	_ = json.Unmarshal(result, &r)
	// token, err := request.Cookie("token")
	// if err != nil {
	// 	if err == http.ErrNoCookie {
	// 		w.WriteHeader(http.StatusUnauthorized)
	// 		return
	// 	}
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	return
	// }

	// _, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	// if err != nil {
	// 	w.Header().Set("Content-Type", "application/json")
	// 	w.WriteHeader(http.StatusUnauthorized)
	// 	w.Write([]byte(err.Error()))
	// }

	adminModel := users.UserAdminParamToModel(r)
	admin, err := user.RegisterAdmin(adminModel)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(admin)
	return
}
