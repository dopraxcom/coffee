import React from 'react';
import { HashRouter, Route , Link } from 'react-router-dom';
function App() {

  return (
    <HashRouter>
      <div className="footer-nav-area" id="footerNav">
      <div className="container h-100 px-0">
        <div className="suha-footer-nav h-100">
          <ul className="h-100 d-flex align-items-center justify-content-between ps-0">
            <li className="active"><a href="home.html"><i className="lni lni-home"></i>Home</a></li>
            <li><a href="message.html"><i className="lni lni-life-ring"></i>Support</a></li>
            <li><a href="cart.html"><i className="lni lni-shopping-basket"></i>Cart</a></li>
            <li><a href="pages.html"><i className="lni lni-heart"></i>page</a></li>
            <li><a href="settings.html"><i className="lni lni-cog"></i>Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
