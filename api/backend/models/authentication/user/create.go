package user

import (
	"crypto/sha1"
	"encoding/hex"
	"strconv"
	"time"

	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
)

func RegisterCustomer() {

}

func RegisterAdmin(admin *models.Admin) (*models.Admin, error) {
	db := database.CreateCon()

	err := db.QueryRow("select id from ico_user_admin where username='" + admin.UserName + "';").Scan(&admin.ID)
	if admin.ID > 0 {
		return &models.Admin{}, err
	}

	stringToHash := []byte(admin.Password)
	hashPassword := sha1.Sum(stringToHash)
	roleID := strconv.Itoa(int(admin.RoleID))
	// roleID, _ := permissions.GetRole(admin.Role.RoleName)
	insert, err := db.Exec("insert into `ico_user_admin` (firstname,lastname,username,password,email,role_id,created_at,status) values ('" + admin.FirstName +
		"','" + admin.LastName + "','" + admin.UserName + "','" + hex.EncodeToString(hashPassword[:]) + "','" + admin.Email + "'," + roleID + ",'" + time.Now().String() + "',0);")
	if err != nil {
		return &models.Admin{}, err
	}
	lastID, err := insert.LastInsertId()
	admin, err = GetAdminInfo(lastID)
	if err != nil {
		return &models.Admin{}, err
	}

	return admin, nil
}

func AddUserMeta() {

}

func GetUserMeta() {

}

func UpdateUserMeta() {

}

func DeleteUserMeta() {

}

func AddAdminMeta() {

}

func GetAdminMeta() {

}

func UpdateAdminMeta() {

}

func DeleteAdminMeta() {

}
