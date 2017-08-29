import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'material-design-icons/iconfont/material-icons.css';
import 'typeface-roboto/index.css';

import createStore from './store/createStore';
import App from './containers/AppComponent';
import registerServiceWorker from './registerServiceWorker';

// ========================================================
// Import Global Styles
// ========================================================
import './global-styles';
window.LOG = (process.env.NODE_ENV === 'production') ? f => f : console.log; // eslint-disable-line

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__; // eslint-disable-line
const store = createStore(initialState);
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

const render = (AppComponent) => {
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </Provider>,
    MOUNT_NODE
  );
};

// This code is excluded from production bundle
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./containers/AppComponent', () => {
      const NextApp = require('./containers/AppComponent').default; // eslint-disable-line
      render(NextApp);
    });
  }
}

// ========================================================
// Go!
// ========================================================
render(App);
registerServiceWorker();
