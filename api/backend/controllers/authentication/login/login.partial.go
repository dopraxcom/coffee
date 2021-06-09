package login

import (
	"github.com/khorasany/coffee/api/backend/helpers/jwtToken"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
)

func mapToMapAdminToJwtToken(admin user.Admin) jwtToken.Claims {
	return jwtToken.Claims{
		ID:        admin.ID,
		Username:  admin.UserName,
		Firstname: admin.FirstName,
		Lastname:  admin.LastName,
		BirthDate: admin.Meta.BirthDate,
		Role:      admin.RoleID,
	}
}
