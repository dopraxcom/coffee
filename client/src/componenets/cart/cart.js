import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart , finalPrice , deleteItem } from "../../actions";

class Cart extends Component {

  state = {
    sum : 0,
    count: 1,
    row: 0,
    store: {}
  }

  componentDidMount() {
      // console.log(this.props.basket)
      // console.log('Price:', this.props.price)
  }

  onPlus = e => {
    console.log(document.getElementsByTagName(e.target.getAttribute('name')));
  };

  onMinus = e => {
    // console.log(e.target.getAttribute('name'));
    console.log(e)
  };

  removeRow = e => {
    // document.getElementById(e.currentTarget.name).style.display = 'none';
    console.log(e);
  }

  renderList() {
       return this.props.basket.map((item , key) => {
         if (!(item.id === undefined)) {
          return(
            <tr key={key} id={key}>
                <th scope="row" >
                <span className="remove-product" name={key} onClick={ (key) => this.removeRow(key)}><i className="lni lni-close"></i></span>
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
                        <div className="quantity-button-handler" name={'input'+key} onClick={(key) => this.onMinus(key)}>-</div>
                        <input className="form-control cart-quantity-input" id={'input'+key} type="text" step="1" onChange={e => this.onTodoChange(e.target.value)} value={this.state.count}/>
                        <div className="quantity-button-handler" name={'input'+key} onClick={this.onPlus  }>+</div>
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
    return this.props.basket.map((item , key) => {
      if (!(item.id === undefined)) {
        this.state.sum = this.state.sum + item.price;
        return this.state.sum.length;
      } else {
        return this.state.sum;
      }
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
                <tbody>
                    {this.renderList()}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card cart-amount-area">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="total-price mb-0">
                <span className="counter" id="finalPrice">{this.finalPrice()}&nbsp;هزار تومان </span>
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
      price  : state.finalPrice,
      delet  : state.deleteItem,
  });
};

export default connect(mapStateToProps, {addToCart , finalPrice, deleteItem})(Cart);
