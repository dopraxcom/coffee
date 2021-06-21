package shop

import (
	"github.com/khorasany/coffee/api/backend/database"
)

func DeleteShop(shopID string) error {
	db := database.CreateCon()
	_, err := db.Exec("delete from ico_shop where id=" + shopID + ";")
	if err != nil {
		return err
	}

	return nil
}
