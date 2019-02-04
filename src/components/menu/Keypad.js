import './Keypad.css';
import React from 'react';
import MenuDisplay from './MenuDisplay';
import { connect } from 'react-redux';
import { buyProduct, returnChange, refillMachine, showError, hideError} from '../../actions';
import Keys from './Keys';
import ActionButton from './ActionButton';
import Mousetrap from 'mousetrap';


class Keypad extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			code: '',
			keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0, 'C']
		};
	};

	componentDidMount() {
		Mousetrap.bind(this.state.keys.map(key => key.toString()), e =>{ this.enterCode(e.key)});
		Mousetrap.bind('c', () => {this.enterCode('C')});
		Mousetrap.bind('enter', () => {this.buyProduct()});
		Mousetrap.bind('esc', () =>{this.enterCode("#")});
	}

	enterCode = (pressedKey) => {
		if(pressedKey === '#') {
			this.props.hideError();
			this.setState({code: ''});
		}else if(this.props.error.showError) { 
			return;
		}else if(pressedKey === 'C') {
			if(this.props.credit === 0) {
				this.props.showError({message : 'No Credit available', showError: true});
			} else if(this.props.change === 10) {
				this.props.showError({message : 'Maximum Change limited to 10$', showError: true})
			}else if(this.props.change === 0 && this.props.credit > 10) {
				this.props.returnChange(10);
			}else if(10-this.props.change <= this.props.credit) {
				this.props.returnChange(10-this.props.change);
			}else if(this.props.credit < 10-this.props.change) {
				this.props.returnChange(this.props.credit);
			}
		}else if(this.state.code.length <= 0) {
			this.setState({code: this.state.code + pressedKey})
		} else if(this.state.code.length < 3) {
			this.setState({code: this.state.code + pressedKey})
		}else if(this.state.code.length >= 3) {
			return this.state.code;			
		};
	}; 

	buyProduct = (code = this.state.code) => {
		if(code.length === 3) {
			this.props.products.forEach(product => {
				if(code === product.code && this.props.credit >= product.price && product.quantity > 0) {
					this.setState({code: ''});
					return this.props.buyProduct(product);
				} else if(code === product.code && this.props.credit < product.price) {
					this.props.showError({message : 'Please add credit before trying to buy a product!', showError: true});
				}else if (code === product.code && product.quantity === 0) {
					this.props.showError({message : 'Item is sold out! Please choose another one.', showError: true});
				};
			});
			this.setState({code: ''});
			return this.props.products.some(product => {return code === product.code }) ? '' : this.props.showError({message : 'Please enter a valid Product Code before trying to buy.', showError: true});
		};
		if(code.length < 3) { this.props.showError({message : 'Please enter a valid Product Code before trying to buy.', showError: true})};
	};


	render() {
		return (
			<div className="keypad">
				<MenuDisplay data = {this.state.code} />
				<p>Please select a Product by entering a code using the below keypad.</p>
				<div className="body">
					<Keys data={this.state.keys} code={(value) => {this.enterCode(value)}} />
				</div>
				<p className="text">Please keep in mind that you can use the # button or the ESC key to clear the Selected Code and the C button or C key to receive the change that is limited to 10$.</p>
				<div className="action-buttons">
					<ActionButton error={this.props.error} function={() => {this.buyProduct()}} name='Buy Product' />
					<ActionButton error={this.props.error} function={() => {this.props.refillMachine()}} name='Refill Machine' />
				</div>
		</div>
		);
	};

	componentWillUnmount() {
		Mousetrap.unbind(this.state.keys.map(key => key.toString()), e =>{ this.enterCode(e.key)});
		Mousetrap.unbind(['enter'], () => {this.buyProduct()});
		Mousetrap.unbind(['esc'], () =>{this.props.hideError()});
	}
};

const mapStateToProps = state => {
	console.log(state);
	return {
		products: state.products,
		credit: state.credit,
		change: state.change,
		error: state.error
	};
};

export default connect(mapStateToProps, { buyProduct, returnChange, refillMachine, showError, hideError })(Keypad);