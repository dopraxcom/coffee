package user

import (
	"crypto/sha1"
	"encoding/hex"
	"github.com/khorasany/coffee/api/backend/models/authentication/permissions"
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
	roleID, _ := permissions.GetRole(admin.Role.RoleName)
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

func RegisterSuperUser(admin *models.Admin) (*models.Admin, error) {
	db := database.CreateCon()

	err := db.QueryRow("select id from ico_user_admin where username='" + admin.UserName + "';").Scan(&admin.ID)
	if admin.ID > 0 {
		return nil, err
	}

	stringToHash := []byte(admin.Password)
	hashPassword := sha1.Sum(stringToHash)
	roleID, _ := permissions.GetRole(admin.Role.RoleName)
	insert, err := db.Exec("insert into `ico_user_admin` (firstname,lastname,username,password,email,role_id,created_at,status) values " +
		"('" + admin.FirstName + "','" + admin.LastName + "','" + admin.UserName + "','" + hex.EncodeToString(hashPassword[:]) + "','" + admin.Email +
		"'," + roleID + ",'" + admin.CreatedAt + "',1);")
	if err != nil {
		return nil, err
	}
	lastID, err := insert.LastInsertId()
	adminID := strconv.Itoa(int(lastID))
	_, _ = db.Exec("insert into `ico_admin_meta` (admin_id, meta_key, meta_value) values (" + adminID + ",'birth_date','" + admin.Meta.BirthDate + "');")
	_, _ = db.Exec("insert into `ico_admin_meta` (admin_id, meta_key, meta_value) values (" + adminID + ",'address','" + admin.Meta.Address + "');")
	_, _ = db.Exec("insert into `ico_admin_meta` (admin_id, meta_key, meta_value) values (" + adminID + ",'avatar','" + admin.Meta.Avatar + "');")
	_, _ = db.Exec("insert into `ico_admin_meta` (admin_id, meta_key, meta_value) values (" + adminID + ",'phone','" + admin.Meta.Phone + "');")
	_, _ = db.Exec("insert into `ico_admin_meta` (admin_id, meta_key, meta_value) values (" + adminID + ",'mobile','" + admin.Meta.Mobile + "');")
	superAdmin, err := GetAdminInfo(lastID)
	if err != nil {
		return nil, err
	}

	return superAdmin, nil
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
