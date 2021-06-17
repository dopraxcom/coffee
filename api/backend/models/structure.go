package models

import (
	"time"
)

type Admin struct {
	ID        int64  `json:"id,omitempty"`
	FirstName string `json:"first_name,omitempty"`
	LastName  string `json:"last_name,omitempty"`
	UserName  string `json:"user_name,omitempty"`
	Password  string `json:"password,omitempty"`
	Email     string `json:"email,omitempty"`
	RoleID    int64  `json:"role_id,omitempty"`
	CreatedAt string `json:"created_at,omitempty"`
	Status    int64  `json:"status,omitempty"`
	Role      Role
	Meta      Meta
}

type AdminMeta struct {
	ID        int64  `json:"id,omitempty"`
	AdminID   int64  `json:"admin_id,omitempty"`
	MetaKey   string `json:"meta_key,omitempty"`
	MetaValue string `json:"meta_value,omitempty"`
}

type UserMeta struct {
	ID        int64  `json:"id,omitempty"`
	UserID    int64  `json:"user_id,omitempty"`
	MetaKey   string `json:"meta_key,omitempty"`
	MetaValue string `json:"meta_value,omitempty"`
}

type Meta struct {
	BirthDate string `json:"birthdate,omitempty"`
	Address   string `json:"address,omitempty"`
	Phone     string `json:"phone,omitempty"`
	Mobile    string `json:"mobile,omitempty"`
	Avatar    string `json:"avatar,omitempty"`
}

type Customer struct {
	ID        int64     `json:"id,omitempty"`
	FirstName string    `json:"first_name,omitempty"`
	LastName  string    `json:"last_name,omitempty"`
	UserName  string    `json:"user_name,omitempty"`
	Password  string    `json:"password,omitempty"`
	Email     string    `json:"email,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty"`
	Status    int64     `json:"status,omitempty"`
}

type Admins []Admin

type Metas []Meta

type Customers []Customer

type Role struct {
	ID       int64  `json:"id,omitempty"`
	RoleName string `json:"role_name,omitempty"`
	Status   int64  `json:"status,omitempty"`
}

type JwtToken struct {
	Token string `json:"jwt_token,omitempty"`
}
