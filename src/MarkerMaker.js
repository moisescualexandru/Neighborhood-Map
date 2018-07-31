import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import Info from './InfoWindow.js';

class MarkerMaker extends Component {
	render() {
		return(
			<Marker position={this.props.location} title={this.props.name} onClick={this.props.onClick}>
			{this.props.isOpen && (
				<InfoWindow onCloseClick={this.props.onCloseClick}>
					<Info 	name={this.props.name}
							address={this.props.address}/>
				</InfoWindow>
			)}
			</Marker>
		);
	}
}

export default MarkerMaker;