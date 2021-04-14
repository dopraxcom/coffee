import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../../actions";

class Cart extends Component {
  componentDidMount() {
      console.log(this.props.basket)
  }

  renderList() {
       return this.props.basket.map((item , key) => {
         if (!(item.id === undefined)) {
          return(
            <tr>
                <th scope="row" key= {key}>
                <i className="lni lni-close"></i>
                </th>
                <td>
                <img src={`/img/${item.img}`} alt={item.title} />
                </td>
                <td>
                {item.title}<span>{item.price} × 1</span>
                </td>
                <td>
                <div className="quantity">
                    <input className="qty-text" type="text" value="1" />
                </div>
                </td>
            </tr>
            );
         } else {
          return false;
         }
        });
  };

finalPrice() {
    let sum = [];
    return this.props.basket.map((item , key) => {
      if (!(item.id === undefined)) {
        return sum = [...sum , item.price];
      } else {
        return sum;
      }
     });
};


  render() {
    return (
      <div className="container">
        <div className="cart-wrapper-area py-3">
          <div className="cart-table card mb-3">
            <div className="table-responsive card-body">
              <table className="table mb-0">
                <tbody>
                    {this.renderList()}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card cart-amount-area">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="total-price mb-0">
                $<span className="counter">{this.finalPrice()}</span>
              </h5>
              <span className="btn btn-warning">پرداخت</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      basket : state.addToCart
  })
};

export default connect(mapStateToProps, addToCart)(Cart);
