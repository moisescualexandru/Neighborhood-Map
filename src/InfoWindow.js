import React, { Component } from 'react';
import RestaurantIcon from './icons/restaurang_map_icon_1x.png';

class Info extends Component {
	render() {
		return(
			<div className='info-window'>
				<h3>{this.props.name}</h3>
				<p>Address: {this.props.address}</p>
				<img src={RestaurantIcon} alt={this.props.name}/>
			</div>
		);
	}
}

export default Info;