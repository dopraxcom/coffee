package users

import (
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func UserAdminParamToModel(param map[string]string) *models.Admin {
	id, _ := strconv.Atoi(param["id"])
	roleID, _ := strconv.Atoi(param["role_id"])
	status, _ := strconv.Atoi(param["status"])
	roleStatus, _ := strconv.Atoi(param["role_status"])
	return &models.Admin{
		ID:        int64(id),
		FirstName: param["firstname"],
		LastName:  param["lastname"],
		UserName:  param["username"],
		Password:  param["password"],
		Email:     param["email"],
		RoleID:    int64(roleID),
		CreatedAt: param["created_at"],
		Status:    int64(status),
		Role: models.Role{
			ID:       int64(roleID),
			RoleName: param["role_name"],
			Status:   int64(roleStatus),
		},
		Meta: models.Meta{
			BirthDate: param["birth_date"],
			Address:   param["address"],
			Phone:     param["phone"],
			Mobile:    param["mobile"],
			Avatar:    param["avatar"],
		},
	}
}

func UsersAdminParamToModel(param map[string]string) []*models.Admin {
	admins := []*models.Admin{}
	for _, item := range param {
		admin := models.Admin{}
		id, _ := strconv.Atoi(item)
		admin.ID = int64(id)
		admins = append(admins, &admin)
	}

	return admins
}

func RoleParamToModel(param map[string]string) *models.Role {
	roleID, _ := strconv.Atoi(param["id"])
	status, _ := strconv.Atoi(param["role_status"])
	return &models.Role{
		ID:       int64(roleID),
		RoleName: param["role_name"],
		Status:   int64(status),
	}
}
