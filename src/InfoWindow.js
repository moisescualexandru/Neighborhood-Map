import React, { Component } from 'react';
import Icon from './icons/menu-placeholder-300x300.jpg'

class Info extends Component {
	state = {
		details: []
	}

	componentDidMount() {
		var own = this;
		fetch(`https://api.foursquare.com/v2/venues/${own.props.id}?client_id=10UW0LCTUOEXUWZX3AWVQBRPVP2HPLP0NI2ATHTSHF25CL5L&client_secret=VAEL3BT1BNDACP2V04BNBC3PCWZAXWUJJX4TKGKHQR2CUHU5&v=20180323`)
			.then(response => response.json())
			.then(data => this.setState((state) => ({
				details: state.details.concat([data.response.venue])
			})))
	}

	getSrc=() => {
		if (this.state.details[0]){
			let src = this.state.details[0].bestPhoto.prefix;
			src += 'width300';
			src += this.state.details[0].bestPhoto.suffix;
			return src;
		} else {
			return Icon; 
		}
	}

	render() {
		if(!this.state.details.length)
			return null;
		else {
			return(
				<div className='info-window'>
					<h3>{this.props.name}</h3>
					<p>Address: {this.props.address}</p>
					<img src={this.getSrc()}
					alt={this.props.name}/>
					<p>For more details see the menu bar!</p>
				</div>
			);	
		}
		
	}
}

export default Info;