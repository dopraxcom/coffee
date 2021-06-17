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

func GetAllAdminUsers() (models.Admins, error) {
	db := database.CreateCon()
	res, err := db.Query("select * from ico_user_admin;")
	if err != nil {
		return nil, err
	}

	adminModel := models.Admin{}
	admins := models.Admins{}
	for res.Next() {
		_ = res.Scan(&adminModel.ID, &adminModel.FirstName, &adminModel.LastName, &adminModel.UserName, &adminModel.Password, &adminModel.Email, &adminModel.CreatedAt, &adminModel.Status)
		admins = append(admins, adminModel)
	}

	return admins, nil
}

func getUserMeta(userID string) {

}

func getAdminMeta(adminID string) {

}
