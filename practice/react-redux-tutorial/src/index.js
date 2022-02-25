import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);


ReactDOM.render(
  document.getElementById('root')
);

ServiceWorker.unregister();