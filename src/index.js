import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Carrot from './Carrot';

import './assets/styles/index.css';
import './assets/styles/screen-600w.css';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Carrot />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
