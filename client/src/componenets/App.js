import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import "./style.css";

import Home from "./home/home";
import Menu from "./menu/menu";
import Cart from "./cart/cart";
import AboutUS from "./aboutUs/aboutUs";
import Settings from "./settings/settings";

function App(props) {
  useEffect(() => {
    setQty(props.qty);
  });

  const [qty, setQty] = useState(0);

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
        </div>
      </div>
    </div>
  );

  function renderQty() {
    let count = 0;
    props.qty.map((item) => {
      if (!(item.id === undefined)) {
        count++;
        console.log(count);
        return (document.getElementById("qty").innerText = count);
      } else {
        return (document.getElementById("qty").innerText = count);
      }
    });
  }

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
                      {renderQty()}
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
