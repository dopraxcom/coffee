import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchData, addToCart } from "../../actions";

class ListGrid extends Component {
  state = {
    item: [],
  };

  componentDidMount() {
    this.props.fetchData();
  }

  renderList() {
    let items = new Set([]);
    for (let i = 20; i < this.props.store.length; i++) {
      items.add(
        this.props.store[Math.floor(Math.random() * this.props.store.length)]
      );
    }

    let rndStore = [];

    items.forEach((item) => rndStore.push(item));

    return rndStore.map((item, key) => {
    return (
        <div className="col-12 col-md-6" dir="ltr">
            <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                    <div className="product-thumbnail-side">
                        {/* <span className="badge badge-success">Sale</span> */}
                        <img 
                            className="mb-2"
                            src={`/img/${item.img}`}
                            alt={item.title}
                        />
                    </div>
                    <div className="product-description" style={{textAlign: 'center'}}>
                    <span className="product-title d-block" style={{fontWeight:'300'}}>
                        {item.title}
                    </span>
                    <p className="sale-price" style={{color:'#000', marginRight:'10px', display:'block'}}>
                        {item.price}
                        <span style={{marginRight:'5px;', fontSize:'10px',color:'#000',textDecoration:'none'}}>هزار تومان</span>
                        
                    </p>
                    <div style={{ marginBottom:'-10px'}}>
                        <p style={{display:'inline-block', left:'0', marginLeft:'5px', marginTop:'-20px', cursor: 'pointer',fontSize:'12px'}}>
                            <i className="lni lni-star" style={{fontSize:'10px', float:'left', marginTop:'3px',color:'#ffca45', marginRight:'4px'}}></i>
                            {item.ratio}
                        </p>
                        .
                        <span style={{fontSize:'12px', marginRight:'5px'}}>
                        {item.steamatetime}
                        </span>
                    </div>
                    <span
                        style={{width:'100%'}}
                        className="btn btn-warning btn-sm"
                        onClick={() => this.onClickFunc(item)}
                    >
                        <i className="lni lni-shopping-basket"></i>
                    </span>
                    </div>
                </div>
            </div>
        </div>
      );
    });
  }

  onClickFunc(item) {
    if (this.props.addToCart.length > 0) {
      return this.props.basket.forEach((key) => {
        if (item.id !== key.id) {
          item.Qty = 1;
          item.cartPrice = item.price;
          item.status = 'addToCart';
          this.props.addToCart(item);
        }
      });
    } else {
      item.Qty = 1;
      item.cartPrice = item.price;
      item.status = 'addToCart';
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

export default connect(mapStateToProps, { fetchData, addToCart })(ListGrid);
