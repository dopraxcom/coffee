package models

import (
	"time"
)

type Admin struct {
	ID        int64    `json:"id,omitempty"`
	FirstName string   `json:"first_name,omitempty"`
	LastName  string   `json:"last_name,omitempty"`
	UserName  string   `json:"user_name,omitempty"`
	Password  string   `json:"password,omitempty"`
	Email     string   `json:"email,omitempty"`
	RoleID    int64    `json:"role_id,omitempty"`
	CreatedAt string   `json:"created_at,omitempty"`
	Status    int64    `json:"status,omitempty"`
	Token     ApiToken `json:"api_token,omitempty"`
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

type Shop struct {
	ID       int64  `json:"id,omitempty"`
	ShopName string `json:"shop_name,omitempty"`
	OwnerID  int64  `json:"owner_id,omitempty"`
	CatID    int64  `json:"cat_id,omitempty"`
	Slug     string `json:"slug,omitempty"`
	Status   int64  `json:"status,omitempty"`
	Meta     ShopMeta
}

type ShopMeta struct {
	TelePhone         string `json:"tele_phone,omitempty"`
	Email             string `json:"email,omitempty"`
	Address           string `json:"address,omitempty"`
	Location          string `json:"location,omitempty"`
	NumberOfEmployers int64  `json:"number_of_employers,omitempty"`
}

type Product struct {
	ID          int64  `json:"id,omitempty"`
	ProductName string `json:"product_name,omitempty"`
	Slug        string `json:"slug,omitempty"`
	ShopID      int64  `json:"shop_id,omitempty"`
	Status      int64  `json:"status,omitempty"`
	Meta        ProductMeta
}

type ProductMeta struct{}

type Order struct {
	ID              int64             `json:"id,omitempty"`
	CustomerID      int64             `json:"customer_id,omitempty"`
	Products        map[string]string `json:"products,omitempty"`
	RefID           string            `json:"ref_id,omitempty"`
	OrderToken      string            `json:"order_token,omitempty"`
	Authority       string            `json:"authority,omitempty"`
	TransportPrice  string            `json:"transport_price,omitempty"`
	TotalPrice      string            `json:"total_price,omitempty"`
	DiscountAmount  string            `json:"discount_amount,omitempty"`
	DiscountCoupon  string            `json:"discount_coupon,omitempty"`
	WalletReduction string            `json:"wallet_reduction,omitempty"`
	CreatedAt       time.Time         `json:"created_at,omitempty"`
	DatePaid        time.Time         `json:"date_paid,omitempty"`
	Description     string            `json:"description,omitempty"`
	Status          string            `json:"status,omitempty"`
}

type ApiToken struct {
	ApiKey string `json:"api_key,omitempty"`
}
