package user

import (
	"github.com/khorasany/coffee/api/backend/models/authentication/permissions"
	"time"
)

type Admin struct {
	ID        int64  `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	UserName  string `json:"user_name"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	RoleID    int64  `json:"role_id"`
	CreatedAt string `json:"created_at"`
	Status    int64  `json:"status"`
	Role      permissions.Role
	Meta      Meta
}

type AdminMeta struct {
	ID        int64  `json:"id"`
	AdminID   int64  `json:"admin_id"`
	MetaKey   string `json:"meta_key"`
	MetaValue string `json:"meta_value"`
}

type UserMeta struct {
	ID        int64  `json:"id"`
	UserID    int64  `json:"user_id"`
	MetaKey   string `json:"meta_key"`
	MetaValue string `json:"meta_value"`
}

type Meta struct {
	BirthDate string `json:"birthdate"`
	Address   string `json:"address"`
	Phone     string `json:"phone"`
	Mobile    string `json:"mobile"`
	Avatar    string `json:"avatar"`
}

type Customer struct {
	ID        int64     `json:"id"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	UserName  string    `json:"user_name"`
	Password  string    `json:"password"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
	Status    int64     `json:"status"`
}

type Admins []Admin

type Metas []Meta

type Customers []Customer
