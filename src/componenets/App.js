import React from 'react';
import { HashRouter , Link , Switch,  Route } from 'react-router-dom';



import Home from './home/home';
import Menu from './menu/menu';
import Cart from './cart/cart';
import AboutUS from './aboutUs/aboutUs';
import Settings from './settings/settings';


function App() {

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

  return (
    <HashRouter>
      <>
        <div className="footer-nav-area" id="footerNav" dir="rtl">
          <div className="container h-100 px-0">
            <div className="suha-footer-nav h-100">
              <ul className="h-100 d-flex align-items-center justify-content-between ps-0">
                <li className="active"><Link to="/"><i className="lni lni-home"></i>Home</Link></li>
                <li><Link to="/menu"><i className="lni lni-life-ring"></i>Support</Link></li>
                <li><Link to="/cart"><i className="lni lni-shopping-basket"></i>Cart</Link></li>
                <li><Link to="/aboutUS"><i className="lni lni-heart"></i>page</Link></li>
                <li><Link to="/settings"><i className="lni lni-cog"></i>Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>
      <Switch>
        <>
        {routes}
        </>
      </Switch>
      </>
    </HashRouter>
  );
}

export default App;
