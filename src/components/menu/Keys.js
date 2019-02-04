import React from 'react';
import './Keypad.css';

const Keys = props => {
	
	return props.data.map(key => {
		return ( 
			<button className="btn btn-outline-dark btn-lg key" 
				key={key} 
				value={key}
				onMouseDown={(e) => {e.preventDefault()}}
				onClick={(e)=> props.code(e.target.value)}>
				{key}
			</button>
		);
	});
};

export default Keys;