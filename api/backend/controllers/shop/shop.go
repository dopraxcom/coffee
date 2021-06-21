package shop

import (
	"encoding/json"
	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	"github.com/khorasany/coffee/api/backend/models/shop/shop"
	"io/ioutil"
	"net/http"
)

func RegisterShop(w http.ResponseWriter, r *http.Request) {
	result, _ := ioutil.ReadAll(r.Body)
	request := make(map[string]string)
	_ = json.Unmarshal(result, &request)

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
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(err.Error()))

		return
	}

	shopModel := shopMapToMapParmaToModel(request)
	shopInfo, err := shop.RegisterShop(shopModel)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(shopInfo)

	return
}

func GetShopByShopID(w http.ResponseWriter, r *http.Request) {

}

func GetShopByOwnerID(w http.ResponseWriter, r *http.Request) {

}
