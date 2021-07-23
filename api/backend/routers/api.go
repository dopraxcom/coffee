package routers

import (
	"github.com/khorasany/coffee/api/backend/controllers/authentication/login"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/permissions"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/register"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/controllers/shop"
	"github.com/khorasany/coffee/api/backend/services"
	"log"
	"net/http"
)

func Router() {
	r := services.RunnerICoffeeService()

	// Super user admin section
	r.HandleFunc("/admins", users.GetAllAdminUsers).Methods("GET")
	r.HandleFunc("/delete/{id}", users.DeleteAdmin).Methods("DELETE").PathPrefix("/super-admin")
	r.HandleFunc("/{id}", users.GetAdminInfo).Methods("GET").PathPrefix("/super-admin")
	r.HandleFunc("/register", register.CreateAdminUser).Methods("POST").PathPrefix("/super-admin")

	r.HandleFunc("/role/register", permissions.SetRole).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/role/{role_name}", permissions.GetRole).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/roles", permissions.GetRoles).Methods("POST").PathPrefix("/super-admin")

	r.HandleFunc("/shop/register", shop.RegisterShop).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/shop/{owner_id}", shop.GetShopByOwnerID).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/shop/{shop_id}", shop.GetShopByShopID).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/shops", shop.GetShops).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/shop/{shop_id}", shop.DeleteShop).Methods("DELETE").PathPrefix("/super-admin")
	r.HandleFunc("/shop/update", shop.UpdateShop).Methods("PATCH").PathPrefix("/super-admin")

	r.HandleFunc("/product/register", shop.RegisterProduct).Methods("POST").PathPrefix("/super-admin")
	r.HandleFunc("/product/{product_id}", shop.GetProductByProductID).Methods("GET").PathPrefix("/super-admin")
	r.HandleFunc("/product/products/{owner_id}", shop.GetProductsByOwnerID).Methods("GET").PathPrefix("/super-admin")
	r.HandleFunc("/product/update", shop.UpdateProduct).Methods("PATCH").PathPrefix("/super-admin")
	r.HandleFunc("/product/delete/{product_id}", shop.DeleteProduct).Methods("DELETE").PathPrefix("/super-admin")

	r.HandleFunc("/{shop_id}", shop.GetAllOrdersOfSpecificShop).Methods("POST").PathPrefix("/super-admin/order")
	r.HandleFunc("{owner_id}", shop.GetAllOrdersOfOwnerShops).Methods("POST").PathPrefix("/super-admin/order")
	r.HandleFunc("/orders/{shop_id}", shop.GetOrdersShop).Methods("POST").PathPrefix("/super-admin")

	// Admin section
	r.HandleFunc("/login", login.LoginAdmin).Methods("POST").PathPrefix("/admin")

	r.HandleFunc("/update", shop.UpdateCard).Methods("PATCH").PathPrefix("/admin/card")
	r.HandleFunc("/delete/{owner_id}", shop.DeleteCard).Methods("GET").PathPrefix("/admin/card")
	r.HandleFunc("/create", shop.CreateCard).Methods("POST").PathPrefix("/admin/card")

	r.HandleFunc("/update", shop.UpdateOrder).Methods("PATCH").PathPrefix("/admin/order")
	r.HandleFunc("/delete/{order_id}", shop.DeleteOrder).Methods("DELETE").PathPrefix("/admin/order")
	r.HandleFunc("/create", shop.CreateOrder).Methods("POST").PathPrefix("/admin/order")
	r.HandleFunc("/{order_id}", shop.GetCustomersOrder).Methods("POST").PathPrefix("/admin/order")
	r.HandleFunc("/{customer_id}", shop.GetCustomersOrders).Methods("POST").PathPrefix("/admin/order")

	log.Fatal(http.ListenAndServe(":9006", r))
}
