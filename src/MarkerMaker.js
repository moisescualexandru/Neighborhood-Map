import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import RestaurantIcon from './icons/restaurang_map_icon_1x.png';

class MarkerMaker extends Component {

	render() {
		return(
			<Marker position={this.props.location} title={this.props.name}/>
		);
	}
}

export default MarkerMaker;