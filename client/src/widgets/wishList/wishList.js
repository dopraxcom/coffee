import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions'

class WishList extends Component {

  renderList(){
    return this.props.data.map( item => {
      if(item.ratio > 4.5){
        return(
          <div className="col-12 col-md-6">
            <div className="card weekly-product-card">
              <div className="card-body d-flex align-items-center">
                <div className="product-thumbnail-side"><span className="badge badge-success">Sale</span><span className="wishlist-btn"><i className="lni lni-heart"></i></span><span className="product-thumbnail d-block"><img src={`/img/${item.img}`}
                  alt={item.title}/></span></div>
                <div className="product-description"><span className="product-title d-block">{item.title}</span>
                  <p className="sale-price"><i className="lni lni-dollar"></i>{item.price}</p>
                  <div className="product-rating">
                    <i className="lni lni-star-filled"></i>{item.ratio}
                  </div>
                    <span className="btn btn-danger btn-sm">
                      <i className="me-1 lni lni-cart"></i>Buy Now
                    </span>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="row g-3" dir="ltr">{this.renderList()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data :  state.fetchData
  }
};


export default connect(mapStateToProps, { fetchData })(WishList)

