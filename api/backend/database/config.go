package database

import (
	"database/sql"
	"github.com/khorasany/coffee/api/backend/globals"
	"log"
)

func CreateCon() *sql.DB {
	db, err := sql.Open("mysql", globals.MYSQL_DATABASE_USERNAME+
		":"+globals.MYSQL_DATABASE_PASSWORD+
		"@tcp(localhost:3306)/"+
		globals.MYSQL_DATABASE_NAME)

	defer db.Close()
	err = db.Ping()
	if err != nil {
		log.Fatalf("mysql db is not connected: %v", err)
	}

	return db
}
