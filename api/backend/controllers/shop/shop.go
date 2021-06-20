package shop

import (
	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	"net/http"
)

func RegisterShop(w http.ResponseWriter, r *http.Request) {
	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.WriteHeader(http.StatusUnauthorized)

			return
		}
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	_, userID, _, err := jwtToken.AuthenticationJwtToken(token.Value)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(err.Error()))

		return
	}

}

func GetShopByShopID(w http.ResponseWriter, r *http.Request) {

}

func GetShopByOwnerID(w http.ResponseWriter, r *http.Request) {

}
