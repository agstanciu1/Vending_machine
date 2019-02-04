import './Menu.css';
import React from 'react';
import CreditDisplay from './CreditDisplay';
import Keypad from './Keypad';

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<CreditDisplay />
				<Keypad />
			</div>
		);
	};
};

export default Menu;