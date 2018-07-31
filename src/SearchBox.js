import React, { Component } from 'react';

class SearchBox extends Component {
	render() {
		return(
			<div className='search-box'>
				<input type="text" value={this.props.query} placeholder='Filter through restaurants' className='text-search' onChange={(event) => this.props.updateQuery(event.target.value)}/>
				<input type="button" value='Clear' className='search-button' onClick={this.props.clearQuery}/>
			</div>
		);
	}
}

export default SearchBox;