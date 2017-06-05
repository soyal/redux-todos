import React from 'react';
import reactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './app';

let middlewares = [thunk]
let store = createStore(reducers, applyMiddleware(...middlewares));

reactDOM.render((
  <Provider store={store}>
    <App></App>
  </Provider>
), document.getElementById('root'));