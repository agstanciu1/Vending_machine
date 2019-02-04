import './VendingMachine.css';
import React from 'react';
import Display from './display/Display';
import Menu from './menu/Menu';
import {connect} from 'react-redux';
import MenuDisplay from './menu/MenuDisplay';


class VendingMachine extends React.Component {

	
	render() {
		return <div className="vending">
			{this.props.showError && <MenuDisplay showError={this.props.showError} data={this.props.message}/>}
			<Display />
			<Menu />
		</div>
	};
}

const mapStateToProps = (state) => {
	return {message: state.error.message,
			showError: state.error.showError
		};
};

export default connect(mapStateToProps)(VendingMachine);