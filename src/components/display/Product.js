import React from 'react';
import './Product.css';

class Product extends React.Component {
	
	render() {
		return (
				<div className="product">
					<div className="body" style={this.props.data.quantity ? {} : {marginBottom: '3.462em'}}>
						<div className="header">
							<div className="title">
								{this.props.data.name}
							</div>
							<div className="image">
								<img alt="blablabla" src={this.props.data.quantity === 0 ? "https://i.ibb.co/w0sSgpd/sold-out.png" : this.props.data.image} />
							</div>
						</div>
						<div className="quantity">
							<span className="text" style={this.props.data.quantity ? {} : {display: 'none'}}>{this.props.data.quantity}</span>
						</div>
					</div>
					<div className="details">
						<span className="text">#{this.props.data.code}</span>
						<span className="price text">{this.props.data.price} $</span>
					</div>
				</div>
		);
	};
};

export default Product;