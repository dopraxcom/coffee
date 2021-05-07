import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, finalPrice } from "../../actions";

class Cart extends Component {
  state = {
    sum: 0,
  };

  onPlus = (e) => {
    console.log(document.getElementsByTagName(e.target.getAttribute("name")));
  };

  onMinus = (e) => {
    console.log(e);
  };

  removeRow = (e) => {
    let counter = 0;
    let index = 0;
    e  = parseInt(e);
    this.props.basket.map((item) => {
      counter++;
      if(e === item.id){
        index = counter;
      }
      return false;
    });
    this.props.addToCart(this.props.basket.splice(index-1,1));
  };

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
                <i className="lni lni-close"></i>
              </span>
            </th>
            <td>
              <img src={`/img/${item.img}`} alt={item.title} />
            </td>
            <td>
              {item.title}
              <span>{item.price}</span>
            </td>
            <td>
              <div className="cart-form-wrapper bg-white mb-3 py-3">
                <div className="container">
                  <form className="cart-form">
                    <div className="order-plus-minus d-flex align-items-center">
                      <div
                        className="quantity-button-handler"
                        name={"input" + key}
                        onClick={(key) => this.onMinus(key)}
                      >
                        -
                      </div>
                      <input
                        className="form-control cart-quantity-input"
                        id={"input" + key}
                        type="text"
                        step="1"
                        onChange={(e) => this.onTodoChange(e.target.value)}
                        value={this.state.count}
                      />
                      <div
                        className="quantity-button-handler"
                        name={"input" + key}
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
      };
    });
  };

  finalPrice() {
    let sum = 0;
    this.props.basket.map((item) => {
      if (item.id !== undefined) {
        sum += item.price;
        this.state.sum = sum;
      }else {
        return sum;
      }
      return false;
    });
  };

  render() {
    this.finalPrice();
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
          <i className="lni lni-home"></i>خانه
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

export default connect(mapStateToProps, { addToCart, finalPrice })(Cart);
