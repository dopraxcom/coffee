package user

func getAllUsers() {

}

func getUser(userID string) {

}

func GetAdminInfo(adminID string) (Admin, error) {
	return Admin{}, nil
}

func login(params map[string]string) {

}

func LoginAdmin(params map[string]string) (bool, Admin) {
	return false, Admin{}
}

func GetAllAdminUsers(params map[string]string) (Admins, error) {
	return nil, nil
}

func getUserMeta(userID string) {

}

func getAdminMeta(adminID string) {

}
