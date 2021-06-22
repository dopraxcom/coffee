package orders

import (
	"github.com/khorasany/coffee/api/backend/database"
	"github.com/khorasany/coffee/api/backend/models"
	"strconv"
)

func CreateOrder(order models.Order) (*models.Order, error) {
	customerID := strconv.Itoa(int(order.CustomerID))
	db := database.CreateCon()
	orderResult, err := db.Exec("insert into ico_order (customer_id, products, ref_id, order_token, authority, transport_price, total_price, discount_amount, discount_coupon, wallet_reduction, created_at, date_paid, description, status) " +
		"values (" + customerID + ",'" + order.Products + "','" + order.RefID + "','" + order.OrderToken + "','" + order.Authority + "','" + order.TransportPrice + "','" + order.TotalPrice + "','" + order.DiscountAmount + "','" + order.DiscountCoupon +
		"','" + order.WalletReduction + "','" + order.CreatedAt.String() + "','" + order.DatePaid.String() + "','" + order.Description + "','" + order.Status + "');")
	if err != nil {
		return nil, err
	}

	orderID, _ := orderResult.LastInsertId()
	order.ID = orderID

	return &order, nil
}
