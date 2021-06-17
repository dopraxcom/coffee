package permissions

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func InsertToken(jwtToken string) error {
	db := database.CreateCon()
	_, err := db.Exec("insert into ico_jwt_token (token) value ('" + jwtToken + "');")
	if err != nil {
		return err
	}

	return nil
}

func SetRole(role models.Admin) (int64, error) {
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
	var role models.Role
	_ = db.QueryRow("select id from ico_roles where role_name='" + roleName + "';").Scan(&role.ID)
	roleID := strconv.Itoa(int(role.ID))

	return roleID
}

func RegisterRole(role *models.Role) error {
	status := strconv.Itoa(int(role.Status))
	db := database.CreateCon()
	_, err := db.Exec("insert into ico_roles (role_name,status) values ('" + role.RoleName + "'" + status + ",);")
	if err != nil {
		return err
	}

	return nil
}
