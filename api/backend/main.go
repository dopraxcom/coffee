package main

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/routers"
)

func main() {
	database.CreateTables()
	routers.Router()
}
