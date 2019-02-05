import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import VendingMachine from './components/VendingMachine';
import reducers from './reducers';

ReactDOM.render(
	<Provider store = {createStore(reducers, applyMiddleware(thunk))}>
	<VendingMachine />
	</Provider>,
	 document.getElementById('root'));
