package shop

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"io/ioutil"
	"net/http"

	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	"github.com/khorasany/coffee/api/backend/models/shop/orders"
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

func GetCustomersOrders(w http.ResponseWriter, r *http.Request) {

}

func GetCustomersOrder(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)

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

	orderInfo, err := orders.GetCustomersOrder(param["order_id"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(orderInfo)

	return
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

func DeleteOrder(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)

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

	err = orders.DeleteOrder(param["order_id"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	return
}

func UpdateOrder(w http.ResponseWriter, r *http.Request) {
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
	orderInfo, err := orders.UpdateOrder(orderModel)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(orderInfo)

	return
}

func CreateCart(w http.ResponseWriter, r *http.Request) {
	result, _ := ioutil.ReadAll(r.Body)
	request := make(map[string][]map[string]string)
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

	cartModel := cartMapToMapParamToModel(request)
	cardsInfo, err := orders.RegisterCard(cartModel, request["customer"][0]["customer_id"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	_ = json.NewEncoder(w).Encode(cardsInfo)

}

func DeleteCard(w http.ResponseWriter, r *http.Request) {
	param := mux.Vars(r)

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

	err = orders.DeleteCard(param["owner_id"])
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(err.Error()))

		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	return
}

func UpdateCard(w http.ResponseWriter, r *http.Request) {

}
