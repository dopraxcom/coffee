import React from 'react';


function WishList(){
    return(
        <div className="weekly-best-seller-area py-3" dir="ltr">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between">
            <h6>Weekly Best Sellers</h6><a className="btn btn-success btn-sm" href="shop-list.html">View All</a>
          </div>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side"><span className="badge badge-success">Sale</span><span className="wishlist-btn"><i className="lni lni-heart"></i></span><span className="product-thumbnail d-block" href="single-product.html"><img src="img/product/10.png" alt=""/></span></div>
                  <div className="product-description"><span className="product-title d-block">Modern Red Sofa</span>
                    <p className="sale-price"><i className="lni lni-dollar"></i>$64<span>$89</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i>4.88 (39)</div><span className="btn btn-danger btn-sm"><i className="me-1 lni lni-cart"></i>Buy Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WishList;
