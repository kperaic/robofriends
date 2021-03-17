import React from 'react';

const Scroll = (props) => {
	
	return ( //below is javascript object within which you return css style, gives you ability to scroll
		<div style = {{ overflow: 'scroll', border: '5px solid black', height: '500px'}}> 
			{props.children}
		</div>  // i guess props.children mean you get the children from Cardlist
		);

};

export default Scroll;