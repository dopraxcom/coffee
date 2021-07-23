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

func GetProductByOwnerID(ownerID string) ([]*models.Product, error) {
	db := database.CreateCon()
	productsResult, err := db.Query("select ip.id as id,ip.product_name as product_name,ip.slug as slug,ip.status as status from ico_product as ip join ico_taxonomy_products_shop " +
		"itps on ip.id = itps.product_id,ico_shop as shop where shop.id = itps.shop_id and shop.owner_id =" + ownerID + ";")
	if err != nil {
		return nil, err
	}

	products := []*models.Product{}
	for productsResult.Next() {
		product := models.Product{}
		productsResult.Scan(&product.ID, &product.ProductName, &product.Slug, &product.Status)
		products = append(products, &product)
	}

	return products, nil
}
