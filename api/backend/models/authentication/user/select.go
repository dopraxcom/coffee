package user

import (
	"crypto/sha1"
	"encoding/hex"
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func getAllUsers() {

}

func getUser(userID int64) {
	//db := database.CreateCon()

}

func GetAdminInfo(adminID int64) (*models.Admin, error) {
	db := database.CreateCon()
	var admin models.Admin
	err := db.QueryRow("select * from ico_user_admin where id="+strconv.Itoa(int(adminID))+";").
		Scan(&admin.ID, &admin.FirstName, &admin.LastName, &admin.UserName, &admin.Password, &admin.Email, &admin.RoleID, &admin.CreatedAt, &admin.Status)
	if err != nil {
		return &models.Admin{}, err
	}

	return &models.Admin{
		ID:        admin.ID,
		FirstName: admin.FirstName,
		LastName:  admin.LastName,
		UserName:  admin.UserName,
		Password:  admin.Password,
		Email:     admin.Email,
		RoleID:    admin.RoleID,
		CreatedAt: admin.CreatedAt,
		Status:    admin.Status,
	}, nil
}

func login(params map[string]string) {

}

func LoginAdmin(admin models.Admin) (bool, models.Admin) {
	stringToHash := []byte(admin.Password)
	hashPassword := sha1.Sum(stringToHash)

	db := database.CreateCon()
	err := db.QueryRow("select id,firstname,lastname,username,email,role_id,created_at,status from ico_user_admin where username='"+
		admin.UserName+"' and password='"+hex.EncodeToString(hashPassword[:])+"';").
		Scan(&admin.ID, &admin.FirstName, &admin.LastName, &admin.UserName, &admin.Email, &admin.RoleID, &admin.CreatedAt, &admin.Status)
	if err != nil {
		return false, models.Admin{}
	}

	if admin.Status == 0 {
		return false, models.Admin{}
	}

	return true, models.Admin{
		ID:        admin.ID,
		FirstName: admin.FirstName,
		LastName:  admin.LastName,
		UserName:  admin.UserName,
		Email:     admin.Email,
		RoleID:    admin.RoleID,
		CreatedAt: admin.CreatedAt,
		Status:    admin.Status,
	}
}

func LoginSuperUserAdmin(admin models.Admin) (bool, models.Admin) {
	stringToHash := []byte(admin.Password)
	hashPassword := sha1.Sum(stringToHash)

	db := database.CreateCon()
	err := db.QueryRow("select * from `ico_user_admin` where username='"+admin.UserName+"' and password='"+hex.EncodeToString(hashPassword[:])+"';").
		Scan(&admin.ID, &admin.FirstName, &admin.LastName, &admin.UserName, &admin.Password, &admin.Email, &admin.RoleID, &admin.CreatedAt, &admin.Status)
	adminID := strconv.Itoa(int(admin.ID))
	rows, _ := db.Query("select meta_key,meta_value from `ico_admin_meta` where admin_id=" + adminID + " and meta_key in ('birth_date','address','phone','mobile','avatar')")
	if err != nil {
		return false, models.Admin{}
	}
	metas := []*models.MetaInfo{}
	for rows.Next() {
		var meta models.MetaInfo
		_ = rows.Scan(&meta.MetaKey, &meta.MetaValue)
		metas = append(metas, &meta)
	}

	superAdmin := models.Admin{}
	for _, value := range metas {
		if value.MetaKey == "birth_date" {
			superAdmin.Meta.BirthDate = value.MetaValue
		}
		if value.MetaKey == "address" {
			superAdmin.Meta.Address = value.MetaValue
		}
		if value.MetaKey == "phone" {
			superAdmin.Meta.Phone = value.MetaValue
		}
		if value.MetaKey == "mobile" {
			superAdmin.Meta.Mobile = value.MetaValue
		}
		if value.MetaKey == "avatar" {
			superAdmin.Meta.Avatar = value.MetaValue
		}
	}
	superAdmin.ID = admin.ID
	superAdmin.FirstName = admin.FirstName
	superAdmin.LastName = admin.LastName
	superAdmin.UserName = admin.UserName
	superAdmin.Email = admin.Email
	superAdmin.RoleID = admin.RoleID
	superAdmin.CreatedAt = admin.CreatedAt

	return true, superAdmin
}

func GetAllAdminUsers() ([]*models.Admin, error) {
	db := database.CreateCon()
	res, err := db.Query("select * from `ico_user_admin` where role_id != 2;")
	if err != nil {
		return nil, err
	}

	admins := []*models.Admin{}
	for res.Next() {
		var admin models.Admin
		_ = res.Scan(&admin.ID, &admin.FirstName, &admin.LastName, &admin.UserName, &admin.Password, &admin.Email, &admin.CreatedAt, &admin.Status)
		admins = append(admins, &admin)
	}

	return admins, nil
}

func getUserMeta(userID string) {

}

func getAdminMeta(adminID string) {

}
