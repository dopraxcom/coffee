package users

import (
	"encoding/json"
	"fmt"
	"github.com/khorasany/coffee/api/backend/models/authentication/user"
	"net/http"
	"time"
)

func GetAllAdminUsers(w http.ResponseWriter, r *http.Request) {
	// TODO: request must be use for authenticate for valid user and permission
	//_ := r

	// TODO: this section must be complete with database
	users := user.Admins{
		user.Admin{
			1,
			"alireza",
			"saffar",
			"0921584210",
			"adygcy8b",
			"a.khorasany@gmail.com",
			1,
			time.Now(),
			0,
		},
	}

	fmt.Println("Endpoint hit: get all admin users")
	json.NewEncoder(w).Encode(users)
}
