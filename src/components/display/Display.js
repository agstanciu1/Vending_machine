import './Display.css';
import React from 'react';
import ProductDisplay from './ProductDisplay';
import Tray from './Tray';

class Display extends React.Component {
	render() {
		return <div className="display">
					<ProductDisplay />
					<Tray />
		</div>
	};
}

export default Display;