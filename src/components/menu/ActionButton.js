import React from 'react';
import './Keypad.css';

const ActionButton = props => {
	const workingButton = props => {
		if(props.error.showError) { return;};
		props.function();
	};

	return <button 
				type="button"
	 			className="btn btn-outline-dark btn-lg" 
	 			onMouseDown={(e) => {e.preventDefault()}}
	 			onClick={() => {workingButton(props)}}
	 			>
	 			{props.name}
	 		</button>
};

export default ActionButton;