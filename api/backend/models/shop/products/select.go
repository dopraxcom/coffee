package products

import (
	"fmt"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
)

func GetProductByProductID(productID string) (*models.Product, error) {
	var product models.Product
	db := database.CreateCon()
	err := db.QueryRow(fmt.Sprintf("select * from ico_product where id=%v;", productID)).Scan(&product.ID, &product.ProductName, &product.Slug, &product.ShopID, &product.Status)
	if err != nil {
		return nil, err
	}
	return &product, nil
}

func GetProductByOwnerID(ownerID string) ([]*models.Product, error) {
	db := database.CreateCon()
	productsResult, err := db.Query(fmt.Sprintf("select ip.id as id,ip.product_name as product_name,ip.slug as slug,ip.status as status from ico_product as ip join ico_taxonomy_products_shop "+
		"itps on ip.id = itps.product_id,ico_shop as shop where shop.id = itps.shop_id and shop.owner_id =%v;", ownerID))
	if err != nil {
		return nil, err
	}

	products := []*models.Product{}
	for productsResult.Next() {
		product := models.Product{}
		_ = productsResult.Scan(&product.ID, &product.ProductName, &product.Slug, &product.Status)
		products = append(products, &product)
	}
	return products, nil
}
