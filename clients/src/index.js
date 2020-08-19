import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './custom.css';
import { Provider } from 'react-redux';
import configureStore,{ history } from './redux/configureStore'; // tích hợp middleware+devtool
ReactDOM.render(
  <Provider store={configureStore()}>
      <App history={history} />
  </Provider>,
  document.getElementById('root')
);

