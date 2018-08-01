import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerMaker from './MarkerMaker';

//Rendering the Google Map and the Markers. 
//The Render function was written with help from react-google-maps git-hub documentation
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
			zoom={props.currentPosition[0].zoom}
			center={props.currentPosition[0].currentPosition}
		>
		{markers}
		</GoogleMap>
	);
}))

export default MapComponent;