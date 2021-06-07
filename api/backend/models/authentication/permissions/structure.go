package permissions

type Role struct {
	ID       int64  `json:"id"`
	RoleName string `json:"role_name"`
	Status   int64  `json:"status"`
}
