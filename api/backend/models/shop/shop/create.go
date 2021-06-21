package shop

import (
	"github.com/gosimple/slug"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func RegisterShop(shop models.Shop) (*models.Shop, error) {
	db := database.CreateCon()
	ownerID := strconv.Itoa(int(shop.OwnerID))
	catID := strconv.Itoa(int(shop.CatID))
	status := strconv.Itoa(int(shop.Status))
	shopSlug := slug.Make(shop.ShopName)
	shopID, err := db.Exec("insert into ico_shop (owner_id, cat_id, shop_name, slug, status) values (" + ownerID + "," + catID + "," +
		shop.ShopName + "," + shopSlug + ", " + status + ");")
	if err != nil {
		return &models.Shop{}, err
	}

	shopIDString, _ := shopID.LastInsertId()
	res := db.QueryRow("select * from ico_shop where id="+strconv.Itoa(int(shopIDString))+";").Scan(
		&shop.ID, &shop.OwnerID, &shop.CatID, &shop.ShopName, &shop.Slug, &shop.Status)
	if res != nil {

		return &models.Shop{}, res
	}

	return &shop, nil
}
