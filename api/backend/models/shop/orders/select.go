package orders

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
)

func GetCustomersOrder(orderID string) (*models.Order, error) {
	var order models.Order
	db := database.CreateCon()
	err := db.QueryRow("select * from ico_order where id="+orderID+";").Scan(&order.ID, &order.CustomerID,
		&order.Products, &order.RefID, &order.OrderToken, &order.Authority, &order.TransportPrice, &order.TotalPrice,
		&order.DiscountAmount, &order.DiscountCoupon, &order.WalletReduction, &order.CreatedAt, &order.DatePaid, &order.Description, &order.Status)
	if err != nil {
		return nil, err
	}

	return &order, nil
}
