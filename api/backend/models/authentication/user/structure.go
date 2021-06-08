package user

import "time"

type Admin struct {
	ID        int64     `json:"id"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	UserName  string    `json:"user_name"`
	Password  string    `json:"password"`
	Email     string    `json:"email"`
	RoleID    int64     `json:"role_id"`
	CreatedAt time.Time `json:"created_at"`
	Status    int64     `json:"status"`
}

type Admins []Admin

type Meta struct {
	ID        int64  `json:"id"`
	UserID    int64  `json:"user_id"`
	UserType  int64  `json:"user_type"`
	MetaKey   string `json:"meta_key"`
	MetaValue string `json:"meta_value"`
}

type Metas []Meta

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

type Customers []Customer
