package permissions

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"strconv"
)

type Role struct {
	ID       int64  `json:"id"`
	RoleName string `json:"role_name"`
	Status   int64  `json:"status"`
}

type JwtToken struct {
	Token string `json:"jwt_token"`
}

func InsertToken(jwtToken string) error {
	db := database.CreateCon()
	_, err := db.Exec("insert into ico_jwt_token (token) value ('" + jwtToken + "');")
	if err != nil {
		return err
	}

	return nil
}

func SetRole(role user.Admin) (int64, error) {
	db := database.CreateCon()
	roleStatus := strconv.Itoa(int(role.Role.Status))
	roleQuery, err := db.Exec("insert into ico_roles (role_name,status) values (" + role.Role.RoleName + "," + roleStatus + ");")
	if err != nil {
		return 0, err
	}
	roleID, _ := roleQuery.LastInsertId()

	return roleID, nil
}

func GetRole(roleName string) string {
	db := database.CreateCon()
	var role Role
	_ = db.QueryRow("select id from ico_roles where role_name='" + roleName + "';").Scan(&role.ID)
	roleID := strconv.Itoa(int(role.ID))
	return roleID
}
