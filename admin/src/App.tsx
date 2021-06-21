import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home   from './componenet/home/Home';
import Store  from './componenet/store/Store';
import Orders from './componenet/orders/Orders';

function App() {

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/store">انبار</Link>
          </li>
          <li>
            <Link to="/users">سفارشات</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/store"  component = {Store} />
        <Route path="/orders" component = {Orders} />
        <Route path="/"       component = {Home}  />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
