package category

import (
	"fmt"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func GetCategoryByID(catID int64) (*models.Category, error) {
	db := database.CreateCon()
	var category models.Category
	strCatID := strconv.Itoa(int(catID))
	err := db.QueryRow("select * from ico_category where id="+strCatID+";").Scan(&category.CatID, &category.Type, &category.CatName, &category.Slug, &category.Parent, &category.Status)
	if err != nil {
		return nil, err
	}
	return &category, nil
}

func GetCategoryByCatName(cat models.Category) (*models.Category, error) {
	db := database.CreateCon()
	err := db.QueryRow(fmt.Sprintf("select * from ico_category where category_name='%v'", cat.CatName)).Scan(&cat.CatID, &cat.Type, &cat.CatName, &cat.Slug, &cat.Parent, &cat.Status)
	if err != nil {
		return nil, err
	}
	return &cat, nil
}
