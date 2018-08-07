import React, { Component } from 'react';
import Icon from './icons/menu-placeholder-300x300.jpg';
import Foursquare from './icons/powered-by-foursquare-grey.png';

class FloatingPanel extends Component {
	state ={
		details: []
	}

	componentDidMount() {
		this.props.restaurants.forEach((restaurant) => {
			fetch(`https://api.foursquare.com/v2/venues/${restaurant.id}?client_id=10UW0LCTUOEXUWZX3AWVQBRPVP2HPLP0NI2ATHTSHF25CL5L&client_secret=VAEL3BT1BNDACP2V04BNBC3PCWZAXWUJJX4TKGKHQR2CUHU5&v=20180323`)
			.then(response => response.json())
			.then(data => this.setState((state) => ({
				details: state.details.concat([ data.response.venue])
			})))
		})
	}

	componetDidUpdate() {
		document.getElementById('focus').focus();
	}

	//geting the image source from Foursquare
	getSrc=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id);
			if (detail.length > 0){
				let src = detail[0].bestPhoto.prefix;
				src += 'width300';
				src += detail[0].bestPhoto.suffix;
				return src;
			} 	
		} else {
				return Icon;
		}
		
	}

	//getting the price category from Foursquare
	getPrice=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id);
			if(detail.length > 0 && detail[0].price)
		 		return detail[0].price.message;	
		} else
			return 'Not categorized yet';
	}

	//getting the rating information from Foursquare
	getRating=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id)
			if(detail.length > 0 && detail[0].rating)
				return detail[0].rating; 	
		} else
			return 'This location was not rated yet!';
	}

	//getting the restaurant's homepage url from Foursquare
	getURL=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id)
			if(detail.length > 0 && detail[0].url) 
				return detail[0].url;	
		} else
			return '';
	}

	//getting the cuisine from Foursquare
	getCategory=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id);
			let cat;
			if(detail.length > 0 && detail[0].categories){
				cat = detail[0].categories.map(c => 
						<p key={c.name}>{c.name}</p>
					);
			}
			return cat;
		} else 
			return 'Information not available';
	}

	//handling the key press events		
	handleKeyDown=(id, event, isOpen) => {
		switch(true) {
				case (event.key === 'Enter' && isOpen === false):
						this.props.handleToggleOpen(id, event.target);
						break;
				case (event.key === 'Enter' && isOpen === true):
						event.preventDefault();
						break;
				case (event.key === 'Tab' && isOpen === true):
						event.preventDefault();
						break;
				case (event.key === 'Escape' && isOpen === false):
						event.preventDefault();
						break;
				case (event.key === 'Escape' && isOpen === true):
						this.props.handleToggleClose(id, event.target);
						break;
				default:
						break;
		}
	}
		
	render() {
		if (!this.state.details.length)
			return null;
		else {
		return(
			<div className='restaurant-list'>
				<ul id='focus' className='restaurant-list' tabIndex='3' aria-label='restaurant list'>
					{this.props.restaurants.map( restaurant => 
						<li 
						className={restaurant.isOpen === false ? 'item-list' : 'item-list selected'} 
						key={restaurant.id}
						onClick={(event) => restaurant.isOpen === false ? this.props.handleToggleOpen(restaurant.id, event.target) : this.props.handleToggleClose(restaurant.id)}
						onKeyDown={(event) => this.handleKeyDown(restaurant.id, event, restaurant.isOpen)}
						tabIndex='5'
						>
							<h2 className='restaurant-title'>{restaurant.title}</h2>
							<div className={ !restaurant.isOpen ? 'restaurant-details' : 'showing' } role='alert'>
								<img src={this.getSrc(restaurant.id)} alt='restaurant overview'/>
								<div className='category-item' >
									<h3>Restaurant category</h3>
									{this.getCategory(restaurant.id)}
								</div>
								<div className='category-item' >
									<h3>Address</h3>
									<p>{restaurant.address}</p>
								</div>
								<div className='category-item'>
									<h3>Opening hours</h3>
									<table>
										<tbody>
											<tr>
												<td>Weekdays: </td>
												<td>{restaurant.openHours.weekdays}</td>
											</tr>
											<tr>
												<td>Weekends: </td>
												<td>{restaurant.openHours.weekends}</td>
											</tr>		
										</tbody>
										
									</table>
								</div>
								<div className='category-item'>
									<h3>Rating</h3>
									<p>{this.getRating(restaurant.id)}
										{this.getRating(restaurant.id) !== 'This location was not rated yet!' && (
										<span> &#x2605;</span>)}
									</p>
								</div>
								<div className='category-item'>
									<h3>Price category $</h3>
									<p>{this.getPrice(restaurant.id)}</p>
								</div>
								{this.getURL(restaurant.id) && (
									<a href={this.getURL(restaurant.id)} target="_blank">Restaurant's home page</a>
								)}
								<img height='10px' src={Foursquare} alt="powered by foursquare"/>
							</div>
						</li>
					)}
				</ul>
			</div>
		);}
	}
}

export default FloatingPanel;