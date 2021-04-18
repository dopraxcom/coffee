import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart , finalPrice } from "../../actions";

class Cart extends Component {
  componentDidMount() {
      console.log(this.props.basket)
      console.log('Price: ',this.props.price)
  }

  onPlus = e => {
    document.getElementsByTagName(e.target.getAttribute('name')).value = 2;
  };

  onMinus = e => {
    console.log(e.target.getAttribute('name'));
  };

  removeRow = e => {
    document.getElementById(e.currentTarget.name).style.display = 'none';
  }

  renderList() {
       return this.props.basket.map((item , key) => {
         if (!(item.id === undefined)) {
          return(
            <tr key={key} id={key}>
                <th scope="row" >
                <span class="remove-product"  name={key} onClick={this.removeRow}><i class="lni lni-close"></i></span>
                </th>
                <td>
                <img src={`/img/${item.img}`} alt={item.title} />
                </td>
                <td>
                {item.title}<span>{item.price} × 1</span>
                </td>
                <td>
                <div className="cart-form-wrapper bg-white mb-3 py-3">
                  <div className="container">
                    <form className="cart-form">
                      <div className="order-plus-minus d-flex align-items-center">
                        <div className="quantity-button-handler" name={'input'+key} onClick={this.onMinus}>-</div>
                        <input className="form-control cart-quantity-input" id={'input'+key} type="text" step="1" onChange={e => this.onTodoChange(e.target.value)} value="1"/>
                        <div className="quantity-button-handler" name={'input'+key} onClick={this.onPlus}>+</div>
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
  };

finalPrice() {
    let sum = 0;
    return this.props.basket.map((item , key) => {
      if (!(item.id === undefined)) {
        return item.price;
      } else {
        return sum;
      }
     });
};


  render() {
    console.log('Price: ',this.props.price)
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
  console.log('state: ' , state)
  return ({
      basket : state.addToCart,
      price : state.finalPrice
  })
};

export default connect(mapStateToProps, {addToCart , finalPrice})(Cart);
