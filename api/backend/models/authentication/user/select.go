package user

import (
	"github.com/khorasany/coffee/api/backend/database"
	"strconv"
)

func getAllUsers() {

}

func getUser(userID int64) {
	//db := database.CreateCon()

}

func GetAdminInfo(adminID int64) (Admin, error) {
	db := database.CreateCon()
	var admin Admin
	err := db.QueryRow("select * from ico_user_admin where id="+strconv.Itoa(int(adminID))+";").
		Scan(&admin.ID, &admin.FirstName, &admin.LastName, &admin.UserName, &admin.Password, &admin.Email, &admin.RoleID, &admin.CreatedAt, &admin.Status)
	if err != nil {
		return Admin{}, err
	}

	return Admin{
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

func LoginAdmin(params map[string]string) (bool, Admin) {
	return false, Admin{}
}

func GetAllAdminUsers(params map[string]string) (Admins, error) {
	return nil, nil
}

func getUserMeta(userID string) {

}

func getAdminMeta(adminID string) {

}
