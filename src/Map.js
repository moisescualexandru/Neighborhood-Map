import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerMaker from './MarkerMaker';

const MapComponent = withScriptjs(withGoogleMap((props) => {
	const markers = props.locations.map(restaurant => 
		<MarkerMaker
			name={restaurant.title}
			key={restaurant.title}
			location={restaurant.position}
		/>
	)
	
	return(
		<GoogleMap
			defaultZoom={15}
			center={{ lat: 44.416783, lng: 26.111854 }}
		>
		{markers}
		</GoogleMap>
	);
}))

export default MapComponent;