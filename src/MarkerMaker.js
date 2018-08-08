import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import Info from './InfoWindow.js';
import Pin from './icons/pin.png';
import Pin2 from './icons/pin3.png';

class MarkerMaker extends Component {
	render() {
		return(
			<Marker position={this.props.location} title={this.props.name} onClick={this.props.onClick} options={this.props.isOpen ? {icon: `${Pin}`} : {icon: `${Pin2}`}}>
			{this.props.isOpen && (
				<InfoWindow onCloseClick={this.props.onCloseClick} id='infowindow'>
					<Info 	name={this.props.name}
							address={this.props.address}
							id={this.props.id} />
				</InfoWindow>
			)}
			</Marker>
		);
	}
}

export default MarkerMaker;