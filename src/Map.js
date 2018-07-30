import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerMaker from './MarkerMaker';

const MapComponent = withScriptjs(withGoogleMap((props) => {
	const markers = props.locations.map(restaurant => 
		<MarkerMaker
			name={restaurant.title}
			key={restaurant.title}
			location={restaurant.position}
			animation={restaurant.animiation}
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