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
                  <div className="product-thumbnail-side"><span className="badge badge-success">Sale</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/10.png" alt=""/></a></div>
                  <div className="product-description"><a className="product-title d-block" href="single-product.html">Modern Red Sofa</a>
                    <p className="sale-price"><i className="lni lni-dollar"></i>$64<span>$89</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i>4.88 (39)</div><a className="btn btn-danger btn-sm" href="#"><i className="me-1 lni lni-cart"></i>Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side"><span className="badge badge-primary">Sale</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/7.png" alt=""/></a></div>
                  <div className="product-description"><a className="product-title d-block" href="single-product.html">Office Chair</a>
                    <p className="sale-price"><i className="lni lni-dollar"></i>$100<span>$160</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i>4.82 (125)</div><a className="btn btn-danger btn-sm" href="#"><i className="me-1 lni lni-cart"></i>Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side"><span className="badge badge-danger">-10%</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/12.png" alt=""/></a></div>
                  <div className="product-description"><a className="product-title d-block" href="single-product.html">Sun Glasses</a>
                    <p className="sale-price"><i className="lni lni-dollar"></i>$24<span>$32</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i>4.79 (63)</div><a className="btn btn-danger btn-sm" href="#"><i className="me-1 lni lni-cart"></i>Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card weekly-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side"><span className="badge badge-warning">New</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img src="img/product/13.png" alt=""/></a></div>
                  <div className="product-description"><a className="product-title d-block" href="single-product.html">Wall Clock</a>
                    <p className="sale-price"><i className="lni lni-dollar"></i>$31<span>$47</span></p>
                    <div className="product-rating"><i className="lni lni-star-filled"></i>4.99 (7)</div><a className="btn btn-danger btn-sm" href="#"><i className="me-1 lni lni-cart"></i>Buy Now</a>
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
