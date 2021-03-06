import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MicrositeApp from './components/MicrositeApp';
import micrositeAppReducer from './reducers/MicrositeReducer';
let initialState = window.__INITIAL_STATE__;

let store = createStore(micrositeAppReducer, {
  roomName: '',
  documentation: '',
  ...initialState
});

ReactDOM.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    <MicrositeApp />
  </Provider>,
  document.querySelector('.microsite-app-entry-point')
);
