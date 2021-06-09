package permissions

type Role struct {
	ID       int64  `json:"id"`
	RoleName string `json:"role_name"`
	Status   int64  `json:"status"`
}

type JwtToken struct {
	Token string `json:"jwt_token"`
}

func InsertToken(jwtToken string) {
	// TODO: Insert jwtToken into whatever databases
}
