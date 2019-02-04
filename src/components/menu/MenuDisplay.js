import React from 'react';
import './Menu.css';

const MenuDisplay = (props) => {
	return <div className={props.showError ? "message" : "code-display"}>
		<h1 className="center"><span className="badge badge secondary">{props.data}</span></h1>
		<p style={props.showError ? {} : {display: 'none'}}>Please press the # button or the ESC key to try again!</p>
		</div>
};


export default MenuDisplay;