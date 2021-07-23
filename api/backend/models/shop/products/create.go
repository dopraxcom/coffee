package products

import (
	"github.com/gosimple/slug"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func RegisterProduct(product models.Product) (*models.Product, error) {
	status := strconv.Itoa(int(product.Status))
	shopID := strconv.Itoa(int(product.ShopID))
	product.Slug = slug.Make(product.ProductName)
	db := database.CreateCon()
	productID, err := db.Exec("insert into ico_product (product_name,slug,shop_id,status) values ('" + product.ProductName + "','" + product.Slug + "'," + shopID + "," + status + ");")
	if err != nil {
		return nil, err
	}

	productIDInt, _ := productID.LastInsertId()
	product.ID = productIDInt

	return &product, nil
}
