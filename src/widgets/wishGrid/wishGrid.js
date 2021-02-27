import React from 'react';

function WishGrid(){
    return(
        <div className="top-products-area clearfix py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between">
            <h6>Top Products</h6><a className="btn btn-danger btn-sm" href="shop-grid.html">View All</a>
          </div>
          <div className="row g-3">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-success">Sale</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/11.png" alt=""/></a><a className="product-title d-block" href="single-product.html">Beach Cap</a>
                  <p className="sale-price">$13<span>$42</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-primary">New</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/5.png" alt=""/></a><a className="product-title d-block" href="single-product.html">Wooden Sofa</a>
                  <p className="sale-price">$74<span>$99</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-success">Sale</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/6.png" alt=""/></a><a className="product-title d-block" href="single-product.html">Roof Lamp</a>
                  <p className="sale-price">$99<span>$113</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-danger">-15%</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/9.png" alt=""/></a><a className="product-title d-block" href="single-product.html">Sneaker Shoes</a>
                  <p className="sale-price">$87<span>$92</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-danger">-11%</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/8.png" alt=""/></a><a className="product-title d-block" href="single-product.html">Wooden Chair</a>
                  <p className="sale-price">$21<span>$25</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-warning">Hot</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/4.png" alt=""/></a><a className="product-title d-block" href="single-product.html">Polo Shirts</a>
                  <p className="sale-price">$38<span>$41</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WishGrid;