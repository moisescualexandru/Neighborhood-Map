import React, { Component } from 'react';

class SearchBox extends Component {
	render() {
		return(
			<div className='search-box'>
				<input type="text" value={this.props.query} placeholder='Filter restaurants' className='text-search' onChange={(event) => this.props.updateQuery(event.target.value)}/>
				<button className='search-button' onClick={this.props.clearQuery}>Clear</button>
			</div>
		);
	}
}

export default SearchBox;