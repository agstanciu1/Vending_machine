import React from 'react';
import './CreditDisplay.css';


const BanknoteButtons = props => {
	const workingButton = (props, value) => {
		if(props.error.showError) { return;};
		props.addCredit(value);
	};
	return props.banknotes.map(banknote => {
			return (
				<button 
					className="btn btn-success btn-lg button" 
					key={banknote} 
					value={banknote} 
					onMouseDown={(e) => {e.preventDefault()}} 
					onClick={(e) => workingButton(props, e.target.value)}
					>
					{banknote} $
				</button>
			);
	});
};

export default BanknoteButtons;