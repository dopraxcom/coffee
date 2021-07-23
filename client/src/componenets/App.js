import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";


//######### IMPORTING MODULES #########################
import Home          from "./home/home";
import Menu          from "./menu/menu";
import Cart          from "./cart/cart";
import AboutUS       from "./aboutUs/aboutUs";
import Settings      from "./settings/settings";
import SingleProduct from '../componenets/singleProduct/singleProduct';
//#####################################################


function App(props) {

  let routes = (
    <div className="page-content-wrapper" dir="rtl">
      <div className="container">
        <div className="settings-wrapper py-3">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/aboutUS">
            <AboutUS />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/singleProduct">
            <SingleProduct />
          </Route>
        </div>
      </div>
    </div>
  );

  return (
    <HashRouter>
      <>
        <div className="footer-nav-area" id="footerNav" dir="rtl" style={{display: 'none'}}>
          <div className="container h-100 px-0">
            <div className="suha-footer-nav h-100">
              <ul className="h-100 d-flex align-items-center justify-content-between ps-0">
                <li className="active">
                  <Link to="/">
                    <i className="lni lni-home"></i>خانه
                  </Link>
                </li>
                <li>
                  <Link to="/menu">
                    <i className="lni lni-life-ring"></i>منو
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <span
                      className="badge badge-pill badge-warning priceBadge"
                      id="qty"
                    >
                    </span>
                    <i className="lni lni-shopping-basket"></i>سبد خرید
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUS">
                    <i className="lni lni-heart"></i>درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <i className="lni lni-cog"></i>تنظیمات
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Switch>
          <>{routes}</>
        </Switch>
      </>
    </HashRouter>
  );
}

const mapStateToProps = (state) => {
  return { qty: state.addToCart };
};

export default connect(mapStateToProps)(App);
