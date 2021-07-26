package routers

import (
	"log"
	"net/http"

	"github.com/khorasany/coffee/api/backend/controllers/authentication/login"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/permissions"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/register"
	"github.com/khorasany/coffee/api/backend/controllers/authentication/users"
	"github.com/khorasany/coffee/api/backend/controllers/shop"
	"github.com/khorasany/coffee/api/backend/services"
)

func Router() {
	r := services.RunnerICoffeeService()

	// Super user admin section
	r.HandleFunc("/super-admin/admins", users.GetAllAdminUsers).Methods("GET")           // checked
	r.HandleFunc("/super-admin/login", login.LoginSuperUserAdmin).Methods("POST")        // checked
	r.HandleFunc("/super-admin/delete/{id}", users.DeleteAdmin).Methods("DELETE")        // checked
	r.HandleFunc("/super-admin/{id}", users.GetAdminInfo).Methods("GET")                 // checked
	r.HandleFunc("/super-admin/register", register.CreateSuperAdminUser).Methods("POST") // checked

	r.HandleFunc("/super-admin/role/register", permissions.SetRole).Methods("POST")   // checked
	r.HandleFunc("/super-admin/role/{role_name}", permissions.GetRole).Methods("GET") // checked
	r.HandleFunc("/super-admin/roles", permissions.GetRoles).Methods("POST")          // checked

	r.HandleFunc("/super-admin/{shop_id}", shop.GetAllOrdersOfSpecificShop).Methods("POST")
	r.HandleFunc("/super-admin/{owner_id}", shop.GetAllOrdersOfOwnerShops).Methods("POST")
	r.HandleFunc("/super-admin/orders/{shop_id}", shop.GetOrdersShop).Methods("POST")

	// category
	r.HandleFunc("/super-admin/category/register", shop.RegisterCategory).Methods("POST")
	r.HandleFunc("/super-admin/category/{cat_id}", shop.GetCategoryByID).Methods("POST")
	r.HandleFunc("/super-admin/category/{cat_name}", shop.GetCategoryByCatName).Methods("POST")
	r.HandleFunc("/super-admin/category/delete/{cat_id}", shop.DeleteCategory).Methods("POST")

	r.HandleFunc("/super-admin/shop/register", shop.RegisterShop).Methods("POST")
	r.HandleFunc("/super-admin/shop/{owner_id}", shop.GetShopByOwnerID).Methods("POST")
	r.HandleFunc("/super-admin/shop/{shop_id}", shop.GetShopByShopID).Methods("POST")
	r.HandleFunc("/super-admin/shops", shop.GetShops).Methods("POST")
	r.HandleFunc("/super-admin/shop/{shop_id}", shop.DeleteShop).Methods("DELETE")
	r.HandleFunc("/super-admin/shop/update", shop.UpdateShop).Methods("PATCH")

	r.HandleFunc("/super-admin/product/register", shop.RegisterProduct).Methods("POST")
	r.HandleFunc("/super-admin/product/{product_id}", shop.GetProductByProductID).Methods("GET")
	r.HandleFunc("/super-admin/product/products/{owner_id}", shop.GetProductsByOwnerID).Methods("GET")
	r.HandleFunc("/super-admin/product/update", shop.UpdateProduct).Methods("PATCH")
	r.HandleFunc("/super-admin/product/delete/{product_id}", shop.DeleteProduct).Methods("DELETE")

	// Admin section
	r.HandleFunc("/admin/login", login.LoginAdmin).Methods("POST")
	r.HandleFunc("/admin/register", register.CreateAdminUser).Methods("POST")
	r.HandleFunc("/admin/update", shop.UpdateCard).Methods("PATCH")
	r.HandleFunc("/admin/delete/{owner_id}", shop.DeleteCard).Methods("GET")
	r.HandleFunc("/admin/create", shop.CreateCard).Methods("POST")

	r.HandleFunc("/admin/update", shop.UpdateOrder).Methods("PATCH")
	r.HandleFunc("/admin/delete/{order_id}", shop.DeleteOrder).Methods("DELETE")
	r.HandleFunc("/admin/create", shop.CreateOrder).Methods("POST")
	r.HandleFunc("/admin/{order_id}", shop.GetCustomersOrder).Methods("POST")
	r.HandleFunc("/admin/{customer_id}", shop.GetCustomersOrders).Methods("POST")

	log.Fatal(http.ListenAndServe(":9006", r))
}
