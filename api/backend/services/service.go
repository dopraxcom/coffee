package services

import (
	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	jwtTokenModel "github.com/khorasany/coffee/api/backend/models/authentication/permissions"
	"net/http"
)

func SetCookie(w http.ResponseWriter, claims jwtToken.Claims) {
	token, err := jwtToken.CreateJwtToken(claims)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	}

	err = jwtTokenModel.InsertToken(token)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	}

	http.SetCookie(w, &http.Cookie{
		Name:    "AuthenticationToken",
		Value:   token,
		Expires: jwtToken.ExpirationTime,
	})
}
