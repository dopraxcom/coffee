package shop

import (
	"encoding/json"
	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	"github.com/khorasany/coffee/api/backend/models/shop/orders"
	"io/ioutil"
	"net/http"
)

func BuyRequest(w http.ResponseWriter, r *http.Request) {

}

func ReturnPaymentStatus(w http.ResponseWriter, r *http.Request) {

}

func GetOrdersShop(w http.ResponseWriter, r *http.Request) {

}

func GetAllOrdersOfOwnerShops(w http.ResponseWriter, r *http.Request) {

}

func GetAllOrdersOfSpecificShop(w http.ResponseWriter, r *http.Request) {

}

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	result, _ := ioutil.ReadAll(r.Body)
	request := make(map[string]string)
	_ = json.Unmarshal(result, &request)

	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.Header().Set("content-Type", "application/json")
			w.WriteHeader(http.StatusUnauthorized)
			_, _ = w.Write([]byte(err.Error()))

			return
		}
		w.Header().Set("content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	_, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	orderModel := orderMapToMapParamToModel(request)
	orderInfo, err := orders.CreateOrder(orderModel)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	_ = json.NewEncoder(w).Encode(orderInfo)

	return
}

func CreateCart(w http.ResponseWriter, r *http.Request) {
	result,_ := ioutil.ReadAll(r.Body)
	request := make(map[string][]map[string]string)
	_ = json.Unmarshal(result,&request)
	

	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			w.Header().Set("content-Type", "application/json")
			w.WriteHeader(http.StatusUnauthorized)
			_, _ = w.Write([]byte(err.Error()))

			return
		}
		w.Header().Set("content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	_, _, _, err = jwtToken.AuthenticationJwtToken(token.Value)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	cartModel := cartMapToMapParamToModel(request)
	cardsInfo,err := orders.RegisterCard(cartModel)

}
