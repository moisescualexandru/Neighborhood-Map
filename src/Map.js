import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerMaker from './MarkerMaker';

const MapComponent = withScriptjs(withGoogleMap((props) => {
	const markers = props.locations.map(restaurant => 
		<MarkerMaker
			name={restaurant.title}
			key={restaurant.id}
			location={restaurant.position}
			address={restaurant.address}
			onClick={() => props.handleToggleOpen(restaurant.id)}
			onCloseClick={() => props.handleToggleClose(restaurant.id)}
			isOpen={restaurant.isOpen}
		/>
	)

	var state = {
		
	}
	
	return(
		<GoogleMap
			zoom={props.currentPosition[0].zoom}
			center={props.currentPosition[0].currentPosition}
		>
		{markers}
		</GoogleMap>
	);
}))

export default MapComponent;