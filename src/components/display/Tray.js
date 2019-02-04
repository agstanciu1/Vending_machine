import React from 'react';
import { connect } from 'react-redux';
import './Tray.css';
import Product from './Product';

class Tray extends React.Component {
	renderBin = () => {
		return this.props.boughtProducts.map(product => {
			return <Product key={Math.random()} data={{name: product.name, image:product.image}} />
		});
	};

 render() {
 	return (
 		<div className="tray">
 			<div className="product-tray">
 				{this.renderBin()}
 			</div>
 		</div>
 		);
 };
};

const mapStateToProps = state => {
	return {boughtProducts: state.boughtProducts};
};

export default connect(mapStateToProps)(Tray);