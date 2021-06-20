package shop

import (
	"github.com/gosimple/slug"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func registerShop(shop models.Shop, userID string) (models.Shop, error) {
	db := database.CreateCon()
	ownerID := strconv.Itoa(int(shop.OwnerID))
	catID := strconv.Itoa(int(shop.CatID))
	status := strconv.Itoa(int(shop.Status))
	slug := slug.Make(shop.ShopName)
	shopID, err := db.Exec("insert into ico_shop (owner_id, cat_id, shop_name, slug, status) values (" + ownerID + "," + catID + "," +
		shop.ShopName + "," + slug + ", " + status + ");")
	if err != nil {
		return models.Shop{}, err
	}

	return shop
}
