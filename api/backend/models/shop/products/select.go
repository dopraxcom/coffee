package products

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
)

func GetProductByProductID(productID string) (*models.Product, error) {
	var product models.Product
	db := database.CreateCon()
	err := db.QueryRow("select * from ico_product where id="+productID+";").Scan(&product.ID, &product.ProductName, &product.Slug, &product.ShopID, &product.Status)
	if err != nil {
		return nil, err
	}

	return &product, nil
}

func GetProductByOwnerID() ([]*models.Product,error) {
	db := database.CreateCon()
	productsResult,err := db.Query("select * from ico_product as ip join ico_shop as ish where ip.shop_id = ish.id and ish.id in (select * from ico_user_admin where id = ish.owner_id)")
}
