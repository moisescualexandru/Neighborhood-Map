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
	
	return(
		<GoogleMap
			defaultZoom={15}
			center={{ lat: 44.418091, lng: 26.123015 }}
		>
		{markers}
		</GoogleMap>
	);
}))

export default MapComponent;