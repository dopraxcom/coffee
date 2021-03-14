import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchData } from "../../actions";



class WishGrid extends Component {
  state = {
  }

  componentDidMount() {
    this.props.fetchData();
    console.log('images: ',this.props.images);

  }

  renderList() {

    return this.props.store.map((item, key) => {
      return (
        <div className="col-6 col-md-4 col-lg-3" key={key}>
          <div className="card top-product-card">
            <div className="card-body">
              <span className="badge badge-success">Sale</span>
              <span className="wishlist-btn">
                <i className="lni lni-heart"></i>
              </span>
              <span className="product-thumbnail d-block">
                <img
                  className="mb-2"
                  src={`/img/${item.img}`}
                  alt={item.title}
                />
              </span>
              <span className="product-title d-block" href="single-product.html">
                {item.title}
              </span>
              <p className="sale-price">
                {item.price}
                <span>$42</span>
              </p>
              <span className="btn btn-success btn-sm">
                <i className="lni lni-plus"></i>
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log('render',this.props.store);
    // console.log("render: ", this.state.images);

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
  console.log('mapStateToProps: ',state.fetchData);
  return { store: state.fetchData };
};

export default connect(mapStateToProps, { fetchData })(WishGrid);
