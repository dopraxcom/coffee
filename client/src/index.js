import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



// =================== CSS
import './assets/css/bootstrap.min.css';
import './assets/css/default/lineicons.min.css';
import './assets/css/style.css';

import reducers from './reducers';


//================ Components
import App from './componenets/App';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

