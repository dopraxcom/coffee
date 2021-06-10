package database

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/khorasany/coffee/api/backend/globals"
)

func createCon() *sql.DB {
	db, err := sql.Open(
		"mysql", globals.MYSQL_DATABASE_USERNAME+":"+globals.MYSQL_DATABASE_PASSWORD+"@tcp("+globals.MYSQL_IP_ADDRESS+":"+globals.MYSQL_PORT+")/")

	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	fmt.Println("successfully run mysql database")

	return db
}

func chooseDatabase() *sql.DB {
	db := createCon()
	defer db.Close()
	_, err := db.Exec("CREATE DATABASE IF NOT EXISTS " + globals.MYSQL_DATABASE_NAME + ";")
	if err != nil {
		panic(err.Error())
	}

	_, err = db.Exec("USE " + globals.MYSQL_DATABASE_NAME + ";")
	if err != nil {
		panic(err.Error())
	}

	return db
}

func CreateTable(tableName string, statement string) {
	db := chooseDatabase()
	db.Close()
	_, checkTable := db.Query("SELECT * FROM information_schema.tables WHERE table_schema = " + globals.MYSQL_DATABASE_NAME + " AND table_name = " + tableName + " LIMIT 1;")
	if checkTable != nil {
		table, err := db.Prepare(statement)
		if err != nil {
			fmt.Println(err.Error())
		}
		table.Exec()
	}
}

func CreateTables() {

}
