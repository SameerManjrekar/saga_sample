import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// eslint-disable-next-line no-unused-vars
window._ = window._ || require('lodash');

// eslint-disable-next-line no-unused-vars
window.axios = window.axios || require('axios');

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
    const createDevToolsWindow = require('./devTools/createDevToolsWindow').default;
    createDevToolsWindow(store);
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
