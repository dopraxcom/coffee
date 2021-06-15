import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import {  useLocation } from "react-router-dom";

const SingleProduct = (props) =>{ 

let location = useLocation();

function renderList(){
    return props.store.map((item, key) => {
        if(item.id === location.id){
            return (
                <div className="page-content-wrapper" dir="ltr" key={key}>
                <div className="product-slides owl-carousel">
                    <div className="single-product-slide" style={{backgroundImage: `url("/img/${item.img}"`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}></div>
                </div>
                <div className="product-description pb-3">
                    <div className="product-title-meta-data bg-white mb-3 py-3">
                        <div className="container d-flex justify-content-between">
                            <div className="p-title-price">
                            <h6 className="mb-1">{item.title}</h6>
                            <p className="sale-price mb-0">$38<span>$41</span></p>
                            </div>
                            <div className="p-wishlist-share"><a href="wishlist-grid.html"><i className="lni lni-heart"></i></a></div>
                        </div>
                        <div className="product-ratings">
                            <div className="container d-flex align-items-center justify-content-between">
                            <div className="ratings"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><span className="ps-1">{item.ratio} ratings</span></div>
                            <div className="total-result-of-ratings"><span>5.0</span><span>Very Good                                </span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flash-sale-panel bg-white mb-3 py-3">
                    <div className="container">
                        <div className="sales-offer-content d-flex align-items-end justify-content-between">
                        <div className="sales-end">
                            <p className="mb-1 font-weight-bold"><i className="lni lni-bolt"></i> Flash sale end in</p>
                            <ul className="sales-end-timer ps-0 d-flex align-items-center" data-countdown="2022/01/01 14:21:37">
                                <li><span className="days">0</span>d</li>
                                <li><span className="hours">0</span>h</li>
                                <li><span className="minutes">0</span>m</li>
                                <li><span className="seconds">0</span>s</li>
                            </ul>
                        </div>
                        <div className="sales-volume text-end">
                            <p className="mb-1 font-weight-bold">82% Sold Out</p>
                            <div className="progress" style={{height: '6px'}}>
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '82%'}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    
                <div className="cart-form-wrapper bg-white mb-3 py-3">
                    <div className="container">
                        <form className="cart-form" action="#" method="">
                        <div className="order-plus-minus d-flex align-items-center">
                            <div className="quantity-button-handler">-</div>
                            <input className="form-control cart-quantity-input" type="text" step="1" name="quantity" value="3"/>
                            <div className="quantity-button-handler">+</div>
                        </div>
                        <button className="btn btn-danger ms-3" type="submit">Add To Cart</button>
                        </form>
                    </div>
                </div>
    
                <div className="p-specification bg-white mb-3 py-3">
                    <div className="container">
                        <h6>Specifications</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p>
                        <ul className="mb-3 ps-3">
                        <li><i className="lni lni-checkmark-circle"> </i> 100% Good Reviews</li>
                        <li><i className="lni lni-checkmark-circle"> </i> 7 Days Returns</li>
                        <li><i className="lni lni-checkmark-circle"> </i> Warranty not Aplicable</li>
                        <li><i className="lni lni-checkmark-circle"> </i> 100% Brand New Product</li>
                        </ul>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p>
                    </div>
                </div>
    
                <div className="rating-and-review-wrapper bg-white py-3 mb-3">
                    <div className="container">
                        <h6>Ratings &amp; Reviews</h6>
                        <div className="rating-review-content">
                        <ul className="ps-0">
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/7.jpg" alt=""/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">Very good product. It's just amazing!</p><span className="name-date">Designing World 12 Dec 2021</span>
                            </div>
                            </li>
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/8.jpg" alt="/"/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">WOW excellent product. Love it.</p><span className="name-date">Designing World 8 Dec 2021</span>
                            </div>
                            </li>
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/9.jpg" alt=""/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">What a nice product it is. I am looking it's.</p><span className="name-date">Designing World 28 Nov 2021</span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="ratings-submit-form bg-white py-3">
                    <div className="container">
                        <h6>Submit A Review</h6>
                        <form action="#" method="">
                        <div className="stars mb-3">
                            <input className="star-1" type="radio" name="star" id="star1"/>
                            <label className="star-1" for="star1"></label>
                            <input className="star-2" type="radio" name="star" id="star2"/>
                            <label className="star-2" for="star2"></label>
                            <input className="star-3" type="radio" name="star" id="star3"/>
                            <label className="star-3" for="star3"></label>
                            <input className="star-4" type="radio" name="star" id="star4"/>
                            <label className="star-4" for="star4"></label>
                            <input className="star-5" type="radio" name="star" id="star5"/>
                            <label className="star-5" for="star5"></label><span></span>
                        </div>
                        <textarea className="form-control mb-3" id="comments" name="comment" cols="30" rows="10" data-max-length="200" placeholder="Write your review..."></textarea>
                        <button className="btn btn-sm btn-primary" type="submit">Save Review</button>
                        </form>
                    </div>
                </div>
            </div>
            );
        }
        return true;
    });
};
      return (
        <>
            {renderList()}
        </>
    );
  
};


const mapStateToProps = (state) => {
    console.log(state);
    return {
        store: state.fetchData
    };
}
export default connect(mapStateToProps, {fetchData})(SingleProduct);