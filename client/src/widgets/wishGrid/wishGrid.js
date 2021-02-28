import React from 'react';

import Americano from '../../assets/img/coffee/Americano-Coffee.jpg';
import Beaten from '../../assets/img/coffee/beaten coffee.jpg';
import Cappuccino from '../../assets/img/coffee/cappuccino.jpg';
import Espressoo from '../../assets/img/coffee/espressoo.jpg';
import Tea from '../../assets/img/coffee/tea.png';
import Turkish from '../../assets/img/coffee/turkish-coffee.jpg';

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
                <div className="card-body"><span className="badge badge-success">Sale</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src={Americano} alt=""/></a><a className="product-title d-block" href="single-product.html">Beach Cap</a>
                  <p className="sale-price">$13<span>$42</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-primary">New</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src={Beaten} alt=""/></a><a className="product-title d-block" href="single-product.html">Wooden Sofa</a>
                  <p className="sale-price">$74<span>$99</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-success">Sale</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src={Cappuccino} alt=""/></a><a className="product-title d-block" href="single-product.html">Roof Lamp</a>
                  <p className="sale-price">$99<span>$113</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-danger">-15%</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src={Espressoo} alt=""/></a><a className="product-title d-block" href="single-product.html">Sneaker Shoes</a>
                  <p className="sale-price">$87<span>$92</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-danger">-11%</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src={Tea} alt=""/></a><a className="product-title d-block" href="single-product.html">Wooden Chair</a>
                  <p className="sale-price">$21<span>$25</span></p>
                  <div className="product-rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div><a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card top-product-card">
                <div className="card-body"><span className="badge badge-warning">Hot</span><a className="wishlist-btn" href="#"><i className="lni lni-heart"></i></a><a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src={Turkish} alt=""/></a><a className="product-title d-block" href="single-product.html">Polo Shirts</a>
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