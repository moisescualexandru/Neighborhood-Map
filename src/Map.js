import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerMaker from './MarkerMaker';
import Media from 'react-media';

//Rendering the Google Map and the Markers. 
//The Render function was written with help from react-google-maps git-hub documentation
const MapComponent = withScriptjs(withGoogleMap((props) => {
	const markers = props.locations.map(restaurant => 
		<MarkerMaker
			name={restaurant.title}
			key={restaurant.id}
			id={restaurant.id}
			location={restaurant.position}
			address={restaurant.address}
			onClick={() => props.handleToggleOpen(restaurant.id)}
			onCloseClick={() => props.handleToggleClose(restaurant.id)}
			isOpen={restaurant.isOpen}
		/>
	)
	
	return(
		<Media query='(max-width: 768px)'>
		{matches => matches ? (
			<GoogleMap
				zoom={13}
				center={props.currentPosition[0].currentPosition}
			>
			{markers}
			</GoogleMap>
		) : (
			<GoogleMap
				zoom={props.currentPosition[0].zoom}
				center={props.currentPosition[0].currentPosition}
			>
			{markers}
			</GoogleMap>
		)}
		</Media>
	);
}))

export default MapComponent;