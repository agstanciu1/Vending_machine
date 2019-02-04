import React from 'react';
import { connect } from 'react-redux';
import { refillMachine} from '../../actions';
import Product from './Product';
import './Display.css';


class ProductDisplay extends React.Component {

	componentDidMount() {
		this.props.refillMachine();
	};

	renderRows = () => {

			return this.props.products.map(product => {
				return <Product data={product} key={product.code}/>
			});
		
	};

	render() {
		return (
			<div className='product-display'>
				{this.renderRows()}
			</div>
		);
	};
};

const mapStateToProps = state => {
	return {products: state.products};
	};
export default connect(mapStateToProps, { refillMachine})(ProductDisplay);