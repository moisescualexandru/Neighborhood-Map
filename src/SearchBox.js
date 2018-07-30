import React, { Component } from 'react';

class SearchBox extends Component {
	render() {
		return(
			<div className='search-box'>
				<input type="text" placeholder='Filter through restaurants' className='text-search'/>
				<input type="button" value='Filter' className='search-button'/>
			</div>
		);
	}
}

export default SearchBox;