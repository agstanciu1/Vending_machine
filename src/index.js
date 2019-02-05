import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import VendingMachine from './components/VendingMachine';
import reducers from './reducers';

ReactDOM.render(
	<Provider store = {createStore(reducers)}>
	<VendingMachine />
	</Provider>,
	 document.getElementById('root'));
