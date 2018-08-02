import React, { Component } from 'react';

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
			.catch(error => alert('Image could not be loaded. Try again!'))
		})
	}

	componentDidUpdate() {
		console.log(this.state.details);
	}

	getSrc=(id) => {
		const detail = this.state.details.filter((r) => id === r.id);
		if (detail.length > 0){
			let src = detail[0].bestPhoto.prefix;
			src += 'width300';
			src += detail[0].bestPhoto.suffix;
			return src;
		} else {
			return null;
		}
	}

	getPrice=(id) => {
		const detail = this.state.details.filter((r) => id === r.id);
		detail.length > 0 ? detail[0].price.message : 'Not categorized yet';
	}

	getRating=(id) => {
		const detail = this.state.details.filter((r) => id === r.id)
		detail.length > 0 && detail[0].rating ? detail[0].rating : 'This location was not rated yet!';
	}

	getURL=(id) => {
		const detail = this.state.details.filter((r) => id === r.id)
		detail.length > 0 && detail[0].url ? detail[0].url : '';
	}

	getCategory=(id) => {
		const detail = this.state.details.filter((r) => id === r.id);
		let cat;
		if(detail.length > 0 && detail[0].categories){
			cat = detail[0].categories.map(c => 
					<span key={c.name}>{c.name}
						{detail[0].categories.indexOf(c, 0) !== detail[0].categories.length-1 && (
							<span> | </span>
						)}
					</span>
				);
		}
		return cat;
	}

	render() {
		if (!this.state.details.length)
			return null;
		else{
		return(
			<div className='restaurant-list'>
				<ul className='restaurant-list'>
					{this.props.restaurants.map( restaurant => 
						<li 
						className={restaurant.isOpen === false ? 'item-list' : 'item-list selected'} 
						key={restaurant.id}
						onClick={() => restaurant.isOpen === false ? this.props.handleToggleOpen(restaurant.id) : this.props.handleToggleClose(restaurant.id)}
						>
							<h3>{restaurant.title}</h3>
							<div className={ !restaurant.isOpen ? 'restaurant-details' : 'restaurant-details showing' }>
								<img src={this.getSrc(restaurant.id)} alt=""/>
								<p>Restaurant category: {this.getCategory(restaurant.id)}</p>
								<p>Address: {restaurant.address}</p>
								<p>Opening hours: </p>
								<p>Rating: {this.getRating(restaurant.id)}
									{this.getRating(restaurant.id) !== 'This location was not rated yet!' && (
										<span> &#x2605;</span>
									)}
								</p>
								<p>Price category $: {this.getPrice(restaurant.id)}</p>
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