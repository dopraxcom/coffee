package products

import "github.com/khorasany/coffee/api/backend/database"

func DeleteProduct(productID string) error {
	db := database.CreateCon()
	_, err := db.Exec("delete from ico_product where id=" + productID + ";")
	if err != nil {
		return err
	}

	return nil
}
