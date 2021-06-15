package mapToMap

import (
	"github.com/khorasany/coffee/api/backend/models/authentication/permissions"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"strconv"
)

func UserAdminParamToModel(param map[string]string) user.Admin {
	id, _ := strconv.Atoi(param["id"])
	roleID, _ := strconv.Atoi(param["role_id"])
	status, _ := strconv.Atoi(param["status"])
	roleStatus, _ := strconv.Atoi(param["role_status"])
	return user.Admin{
		ID:        int64(id),
		FirstName: param["firstname"],
		LastName:  param["lastname"],
		UserName:  param["username"],
		Password:  param["password"],
		Email:     param["email"],
		RoleID:    int64(roleID),
		CreatedAt: param["created_at"],
		Status:    int64(status),
		Role: permissions.Role{
			ID:       int64(roleID),
			RoleName: param["role_name"],
			Status:   int64(roleStatus),
		},
		Meta: user.Meta{
			BirthDate: param["birth_date"],
			Address:   param["address"],
			Phone:     param["phone"],
			Mobile:    param["mobile"],
			Avatar:    param["avatar"],
		},
	}
}
