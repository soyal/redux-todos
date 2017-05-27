import React from 'react';
import reactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './app';

let store = createStore(reducers);

reactDOM.render((
  <Provider store={store}>
    <App></App>
  </Provider>
), document.getElementById('root'));