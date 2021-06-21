package shop

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func UpdateShop(shop models.Shop) (*models.Shop, error) {
	ownerID := strconv.Itoa(int(shop.OwnerID))
	catID := strconv.Itoa(int(shop.CatID))
	status := strconv.Itoa(int(shop.Status))
	db := database.CreateCon()
	_, err := db.Exec("update ico_shop set owner_id='" + ownerID + "',cat_id='" + catID + "',shop_name='" + shop.ShopName + "',slug='" + shop.Slug + "',status='" + status + "';")
	if err != nil {
		return nil, err
	}

	return &shop, nil
}
