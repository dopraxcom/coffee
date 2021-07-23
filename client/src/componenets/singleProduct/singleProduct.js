import React from 'react';
import { connect } from 'react-redux';
import { fetchData ,addToCart } from '../../actions';
import {  useLocation, Link } from "react-router-dom";
import _ from 'lodash';
import { useDispatch } from "react-redux";

const SingleProduct = (props) =>{ 

let location = useLocation();
const dispatch = useDispatch();

function onClickFunc(item) {
    item.Qty = 1;
    item.cartPrice = item.price;
    item.status = 'addToCart';
    dispatch(addToCart(item));
  }

function renderList(){
    let cart = false;
    _.forEach(props.cart, (item) =>{
        if(item.id === location.id){
            return cart = true;
        }
    });
    return props.store.map((item, key) => {
        if(item.id === location.id && cart){
            return (
                <div className="page-content-wrapper" dir="ltr" key={key}>
                <div className="product-slides owl-carousel">
                    <div className="single-product-slide" style={{backgroundImage: `url("/img/${item.img}"`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}></div>
                </div>
                <div className="product-description pb-3">
                    <div className="product-title-meta-data bg-white mb-3 py-3">
                        <div className="container d-flex justify-content-between">
                            <div className="p-title-price">
                            <h6 style={{textAlign:'center'}} className="mb-1">{item.title}</h6>
                            <p className="sale-price" style={{color:'#000',direction:'rtl', marginRight:'10px'}}>
                                {item.price}
                                <span style={{marginRight:'5px', fontSize:'10px',color:'#000',textDecoration:'none'}}>هزار تومان</span> 
                            </p>
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
                <div className="flash-sale-panel bg-white mb-3 py-3" dir="rtl">
                    <div className="container">
                        <div className="sales-offer-content d-flex align-items-end justify-content-between">
                        <div className="sales-end">
                            <p className="mb-1 font-weight-bold"><i className="lni lni-bolt"></i>تخفیف ویژه هفته</p>
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
                        <form className="cart-form" style={{justifyContent: 'center'}}>
                       
                        <button className="btn btn-danger ms-3" disabled>در سبد شما موجود است</button>
                        </form>
                    </div>
                </div>
    
                <div className="p-specification bg-white mb-3 py-3" dir="rtl">
                    <div className="container">
                        <h6>جزییات</h6>
                        <p>{item.description}</p>
                        <ul className="mb-3 ps-3" dir="ltr">
                        <li><i className="lni lni-checkmark-circle"> </i> 100% Good Reviews</li>
                        <li><i className="lni lni-checkmark-circle"> </i> 7 Days Returns</li>
                        <li><i className="lni lni-checkmark-circle"> </i> Warranty not Aplicable</li>
                        <li><i className="lni lni-checkmark-circle"> </i> 100% Brand New Product</li>
                        </ul>
                        {/* <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p> */}
                    </div>
                </div>
    
                <div className="rating-and-review-wrapper bg-white py-3 mb-3" dir="rtl">
                    <div className="container">
                        <h6>نظرات کاربران</h6>
                        <div className="rating-review-content">
                        <ul className="ps-0">
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/7.jpg" alt=""/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">خیلی عالی بود!</p><span className="name-date">12 اردیبهشت 1400</span>
                            </div>
                            </li>
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/8.jpg" alt="/"/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">محیط بسیار عالی و طعم بسیار خوب غذا.</p><span className="name-date">14 تیر 1400</span>
                            </div>
                            </li>
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/9.jpg" alt=""/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">حتما بهتون پیشنهاد میکنم این غذا رو امتحان کنید.</p><span className="name-date">13 آبان 1400</span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="ratings-submit-form bg-white py-3" dir="rtl">
                    <div className="container">
                        <h6>نظر خود را وارد کنید</h6>
                        <form action="#" method="" dir="ltr">
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
                        <textarea className="form-control mb-3" dir="rtl" id="comments" name="comment" cols="30" rows="10" data-max-length="200" placeholder="لطفا نظر خود را وارد کنید ..."></textarea>
                        <button className="btn btn-sm btn-primary" type="submit">ارسال نظر</button>
                        </form>
                    </div>
                </div>
            </div>
            );
        } else if(item.id === location.id){
            return (
                <div className="page-content-wrapper" dir="ltr" key={key}>
                <div className="product-slides owl-carousel">
                    <div className="single-product-slide" style={{backgroundImage: `url("/img/${item.img}"`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}></div>
                </div>
                <div className="product-description pb-3">
                    <div className="product-title-meta-data bg-white mb-3 py-3">
                        <div className="container d-flex justify-content-between">
                            <div className="p-title-price">
                            <h6 style={{textAlign:'center'}} className="mb-1">{item.title}</h6>
                            <p className="sale-price" style={{color:'#000',direction:'rtl', marginRight:'10px'}}>
                                {item.price}
                                <span style={{marginRight:'5px', fontSize:'10px',color:'#000',textDecoration:'none'}}>هزار تومان</span> 
                            </p>
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
                <div className="flash-sale-panel bg-white mb-3 py-3" dir="rtl">
                    <div className="container">
                        <div className="sales-offer-content d-flex align-items-end justify-content-between">
                        <div className="sales-end">
                            <p className="mb-1 font-weight-bold"><i className="lni lni-bolt"></i>تخفیف ویژه هفته</p>
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
                        <form className="cart-form" style={{justifyContent: 'center'}}>
                        <button className="btn btn-danger ms-3" onClick={() => onClickFunc(item)}>افزودن به سبد خرید</button>
                        </form>
                    </div>
                </div>
    
                <div className="p-specification bg-white mb-3 py-3" dir="rtl">
                    <div className="container">
                        <h6>جزییات</h6>
                        <p>{item.description}</p>
                        <ul className="mb-3 ps-3" dir="ltr">
                        <li><i className="lni lni-checkmark-circle"> </i> 100% Good Reviews</li>
                        <li><i className="lni lni-checkmark-circle"> </i> 7 Days Returns</li>
                        <li><i className="lni lni-checkmark-circle"> </i> Warranty not Aplicable</li>
                        <li><i className="lni lni-checkmark-circle"> </i> 100% Brand New Product</li>
                        </ul>
                        {/* <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p> */}
                    </div>
                </div>
    
                <div className="rating-and-review-wrapper bg-white py-3 mb-3" dir="rtl">
                    <div className="container">
                        <h6>نظرات کاربران</h6>
                        <div className="rating-review-content">
                        <ul className="ps-0">
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/7.jpg" alt=""/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">خیلی عالی بود!</p><span className="name-date">12 اردیبهشت 1400</span>
                            </div>
                            </li>
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/8.jpg" alt="/"/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">محیط بسیار عالی و طعم بسیار خوب غذا.</p><span className="name-date">14 تیر 1400</span>
                            </div>
                            </li>
                            <li className="single-user-review d-flex">
                            <div className="user-thumbnail"><img src="img/bg-img/9.jpg" alt=""/></div>
                            <div className="rating-comment">
                                <div className="rating"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i></div>
                                <p className="comment mb-0">حتما بهتون پیشنهاد میکنم این غذا رو امتحان کنید.</p><span className="name-date">13 آبان 1400</span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="ratings-submit-form bg-white py-3" dir="rtl">
                    <div className="container">
                        <h6>نظر خود را وارد کنید</h6>
                        <form action="#" method="" dir="ltr">
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
                        <textarea className="form-control mb-3" dir="rtl" id="comments" name="comment" cols="30" rows="10" data-max-length="200" placeholder="لطفا نظر خود را وارد کنید ..."></textarea>
                        <button className="btn btn-sm btn-primary" type="submit">ارسال نظر</button>
                        </form>
                    </div>
                </div>
            </div>
            );
        }
        return console.log(cart);
    });
};


      return (
        <>
        {renderList()}
        
        <div className="shopCartIconDiv" style={{position: 'fixed', bottom:'0', zIndex:'2', marginBottom: '20px'}}>
            <Link to="/cart">
            <span className="btn btn-warning btn-sm shopCartSpan1">
                <i className="lni lni-shopping-basket"></i>
            </span>
            </Link>
            <Link to="/">
            <span className="shopCartSpan2" style={{background:'none', float: 'none'}}><i
                    className="lni lni-home bg-warning p-2"
                    style={{
                    borderRadius: "50%",
                    fontSize: "20px",
                    }}
                    ></i>
                </span>
            </Link>
        </div>    
            
        </>
    );
  
};


const mapStateToProps = (state) => {
    console.log(state);
    return {
        store: state.fetchData,
        cart : state.addToCart
    };
}
export default connect(mapStateToProps, {fetchData})(SingleProduct);