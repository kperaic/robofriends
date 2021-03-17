import React from 'react';

const SearchBox = ({searchfield, searchChange}) => { //you actually don't need searchfield, you destructure searchChange (an event) and it allows you to grab it's properties
	return (
	<div classname = 'pa2'>
		<input
		className = 'pa3 ba b--green bg-lightest-blue' 
		type ='search' 
		placeholder='search robots' 
		onChange = {searchChange} 
		/>
		 
	</div>
		);
}

export default SearchBox;