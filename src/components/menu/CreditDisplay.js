import React from 'react';
import './CreditDisplay.css';
import { connect } from 'react-redux';
import { addCredit } from '../../actions';
import MenuDisplay from './MenuDisplay';
import BanknoteButtons from './BanknoteButtons';

class CreditDisplay extends React.Component{
	state = {banknotes: [1, 5, 10, 20]};
	
	render() {
		return (
			<div className="credit">
				<div className="center">
					Available Credit
				</div>
				<div className="body">
					<MenuDisplay data={this.props.credit} />
					<div className="btn-toolbar center" role="toolbar">
						<p className = "center text"> Please add Credit before you buy</p>
						<BanknoteButtons error={this.props.error} banknotes={this.state.banknotes} addCredit={value => {this.props.addCredit(value)}} />
					</div>
				</div>
			</div>	
		);
	};
};

const mapStateToProps = state => {
	return {
		credit: state.credit,
		error: state.error
	};
};

export default connect(mapStateToProps, { addCredit })(CreditDisplay);