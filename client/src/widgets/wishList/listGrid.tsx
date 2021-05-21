import React , { Component } from 'react';

class ListGrid extends Component {
    render(){
        return(
            <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side"><span className="badge badge-success">Sale</span><span className="wishlist-btn"><i className="lni lni-heart"></i></span><span className="product-thumbnail d-block"><img src="img/product/10.png" alt=""/></span></div>
                  <div className="product-description"><span className="product-title d-block">Modern Red Sofa</span>
                    <p className="sale-price"><i className="lni lni-dollar"></i>$64<span>$89</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i>4.88 (39)</div><span className="btn btn-danger btn-sm"><i className="me-1 lni lni-cart"></i>Buy Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


export default ListGrid;