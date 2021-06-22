package products

import (
	"github.com/gosimple/slug"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func UpdateProduct(product models.Product) (*models.Product, error) {
	status := strconv.Itoa(int(product.Status))
	product.Slug = slug.Make(product.ProductName)
	db := database.CreateCon()
	_, err := db.Exec("update ico_product set product_name='" + product.ProductName + "',slug='" + product.Slug + "',status=" + status + ";")
	if err != nil {
		return nil, err
	}

	return &product, nil
}
