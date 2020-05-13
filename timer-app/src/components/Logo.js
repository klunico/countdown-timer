import React from 'react';
import logo from '../images/blue-hourglass.gif';
import '../css/Logo.css';

function Logo(props) {
    return (
    	<div>
    		<img src={logo} className="App-logo" alt="logo" />
    	</div>
    )
}

export default Logo;
