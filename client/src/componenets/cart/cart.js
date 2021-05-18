import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../../actions";

class Cart extends Component {
  state = {
    sum: 0,
    number: 1,
  };

  onPlus = (e) => {
    let name = e.target.attributes.name;
    name = name.value.split("input");
    let id = name[1];
    id = parseInt(id);
    this.props.basket.map((item) => {
      if (item.id === id) {
        item.Qty = item.Qty + 1;
        item.cartPrice = item.Qty * item.price;
      }
    });
    this.props.addToCart();
  };

  onMinus = (e) => {
    let name = e.target.attributes.name;
    name = name.value.split("input");
    let id = name[1];
    id = parseInt(id);
    this.props.basket.map((item) => {
      if (item.id === id && item.Qty !== 1) {
        item.Qty = item.Qty - 1;
        item.cartPrice = item.Qty * item.price;
      }
    });
    this.props.addToCart();
  };

  removeRow = (e) => {
    let id = parseInt(e);
    let count = 0;
    this.props.basket.map((item) => {
      if (id === item.id) {
        this.props.basket.splice(count, 1);
        console.log(count);
      }
      count++;
    });
    this.props.addToCart();
  };

  totalPrice() {
    let sum = 0;
    this.props.basket.map((item) => {
      if (item.id !== undefined) {
        sum = sum + item.cartPrice;
      }
    });
    this.state.sum = sum;
  }

  renderList() {
    return this.props.basket.map((item, key) => {
      if (!(item.id === undefined)) {
        return (
          <tr key={key} id={key}>
            <th scope="row">
              <span
                className="remove-product"
                id={item.id}
                onClick={(e) => this.removeRow(e.currentTarget.id)}
              >
                <i
                  className="lni lni-close"
                  style={{
                    padding: "5px",
                    background: "red",
                    color: "#fff",
                    borderRadius: "50%",
                  }}
                ></i>
              </span>
            </th>
            <td>
              <img src={`/img/${item.img}`} alt={item.title} />
            </td>
            <td>
              {item.title}
              <span>&nbsp;{item.cartPrice}&nbsp;تومان</span>
            </td>
            <td>
              <div className="cart-form-wrapper bg-white mb-3 py-3">
                <div className="container">
                  <form className="cart-form">
                    <div className="order-plus-minus d-flex align-items-center">
                      <div
                        className="quantity-button-handler"
                        name={"input" + item.id}
                        onClick={(key) => this.onMinus(key)}
                      >
                        -
                      </div>
                      <div className="quantity-button-handler">{item.Qty}</div>
                      <div
                        className="quantity-button-handler"
                        name={"input" + item.id}
                        onClick={this.onPlus}
                      >
                        +
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </td>
          </tr>
        );
      } else {
        return false;
      }
    });
  }

  render() {
    this.totalPrice();
    return (
      <div className="container">
        <div className="cart-wrapper-area py-3">
          <div className="cart-table card mb-3">
            <div className="table-responsive card-body">
              <table className="table mb-0">
                <tbody>{this.renderList()}</tbody>
              </table>
            </div>
          </div>
          <div className="card cart-amount-area">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="total-price mb-0">
                <span className="counter" id="finalPrice">
                  {this.state.sum}&nbsp;هزار تومان{" "}
                </span>
              </h5>
              <span className="btn btn-warning">پرداخت</span>
            </div>
          </div>
        </div>
        <Link to="/">
          <i
            className="lni lni-home bg-warning p-2"
            style={{
              borderRadius: "50%",
              fontSize: "20px",
            }}
          ></i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    basket: state.addToCart,
    price: state.finalPrice,
  };
};

export default connect(mapStateToProps, { addToCart })(Cart);
