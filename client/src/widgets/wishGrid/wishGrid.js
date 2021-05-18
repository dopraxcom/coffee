import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchData, addToCart } from "../../actions";

class WishGrid extends Component {
  state = {
    item: [],
  };

  componentDidMount() {
    this.props.fetchData();
  }

  renderList() {
    let items = new Set([]);
    for (let i = 11; i < this.props.store.length; i++) {
      items.add(
        this.props.store[Math.floor(Math.random() * this.props.store.length)]
      );
    }

    let rndStore = [];

    items.forEach((item) => rndStore.push(item));

    return rndStore.map((item, key) => {
      return (
        <div className="col-6 col-md-4 col-lg-3" key={key}>
          <div className="card top-product-card">
            <div className="card-body">
              {/* <span className="badge badge-success">Sale</span> */}
              {/* <span className="wishlist-btn">
                <i className="lni lni-heart"></i>
              </span> */}
              <span className="product-thumbnail d-block">
                <img
                  className="mb-2"
                  src={`/img/${item.img}`}
                  alt={item.title}
                />
              </span>
              <span
                className="product-title d-block"
                href="single-product.html"
              >
                {item.title}
              </span>
              <p className="sale-price">
                {item.price}
                {/* <span>$42</span> */}
              </p>
              <span
                className="btn btn-warning btn-sm"
                onClick={() => this.onClickFunc(item)}
              >
                <i className="lni lni-shopping-basket"></i>
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  onClickFunc(item) {
    if (this.props.addToCart.length > 0) {
      this.props.basket.map((key) => {
        if (item.id !== key.id) {
          item.Qty = 1;
          item.cartPrice = item.price;
          this.props.addToCart(item);
        }
      });
    } else {
      item.Qty = 1;
      item.cartPrice = item.price;
      this.props.addToCart(item);
    }
  }

  render() {
    return (
      <div className="top-products-area clearfix py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between">
            <h6>Top Products</h6>
            <span className="btn btn-danger btn-sm">View All</span>
          </div>
          <div className="row g-3">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    store: state.fetchData,
    basket: state.addToCart,
    cart: state.finalPrice,
  };
};

export default connect(mapStateToProps, { fetchData, addToCart })(WishGrid);
