import React, { Component } from 'react';
import Icon from './icons/menu-placeholder-300x300.jpg';

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

	getPrice=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id);
			if(detail.length > 0 && detail[0].price)
		 		return detail[0].price.message;	
		} else
			return 'Not categorized yet';
	}

	getRating=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id)
			if(detail.length > 0 && detail[0].rating)
				return detail[0].rating; 	
		} else
			return 'This location was not rated yet!';
	}

	getURL=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id)
			if(detail.length > 0 && detail[0].url) 
				return detail[0].url;	
		} else
			return '';
	}

	getCategory=(id) => {
		if (this.state.details[0]) {
			const detail = this.state.details.filter((r) => id === r.id);
			let cat;
			if(detail.length > 0 && detail[0].categories){
				cat = detail[0].categories.map(c => 
						<p key={c.name} tabIndex=4>{c.name}</p>
					);
			}
			return cat;
		} else 
			return 'Information not available';
	}

	render() {
		if (!this.state.details.length)
			return null;
		else {
		return(
			<div className='restaurant-list'>
				<ul className='restaurant-list' tabIndex=1 aria-label='restaurant list'>
					{this.props.restaurants.map( restaurant => 
						<li 
						className={restaurant.isOpen === false ? 'item-list' : 'item-list selected'} 
						key={restaurant.id}
						onClick={(event) => restaurant.isOpen === false ? this.props.handleToggleOpen(restaurant.id, event.target) : this.props.handleToggleClose(restaurant.id)}
						aria-label={restaurant.title}
						>
							<h2 className='restaurant-title'>{restaurant.title}</h2>
							<div tabIndex=2 className={ !restaurant.isOpen ? 'restaurant-details' : 'showing' } aria-label='restaurant details'>
								<img src={this.getSrc(restaurant.id)} alt='restaurant image'/>
								<div className='category-item' aria-label='restaurant categories' tabIndex=3>
									<h3>Restaurant category</h3>
									{this.getCategory(restaurant.id)}
								</div>
								<div className='category-item' tabIndex=3 aria-label='restaurant address'>
									<h3>Address</h3>
									<p tabIndex=4>{restaurant.address}</p>
								</div>
								<div className='category-item' aria-label='opening hours' tabIndex=3>
									<h3>Opening hours</h3>
									<p tabIndex=4></p>
								</div>
								<div className='category-item' tabIndex=3 aria-label='rating'>
									<h3>Rating</h3>
									<p tabIndex=4>{this.getRating(restaurant.id)}
										{this.getRating(restaurant.id) !== 'This location was not rated yet!' && (
										<span> &#x2605;</span>)}
									</p>
								</div>
								<div className='category-item' aria-label='price category' tabIndex=3>
									<h3>Price category $</h3>
									<p tabIndex=4>{this.getPrice(restaurant.id)}</p>
								</div>
								{this.getURL(restaurant.id) && (
									<a href={this.getURL(restaurant.id)} target="_blank">Restaurant's home page</a>
								)}
							</div>
						</li>
					)}
				</ul>
			</div>
		);}
	}
}

export default FloatingPanel;