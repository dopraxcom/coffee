package category

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func RegisterCategory(category models.Category) (*models.Category, error) {
	db := database.CreateCon()
	parent := strconv.Itoa(int(category.Parent))
	status := strconv.Itoa(int(category.Status))
	cat, err := db.Exec("insert into ico_category (type, category_name, slug, parent, status) values ('" + category.Type + "','" + category.CatName + "','" + category.Slug + "'," + parent + "," + status + ");")
	if err != nil {
		return nil, err
	}
	catID, _ := cat.LastInsertId()
	category.CatID = catID
	return &category, nil
}
