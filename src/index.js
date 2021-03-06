import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './tailwind.output.css';

import App from './components/App';
import reducers from './components/reducers';

const rootElement = document.getElementById('root');
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
