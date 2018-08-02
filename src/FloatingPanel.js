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
							<div className={ !restaurant.isOpen ? 'restaurant-details' : 'showing' }>
								<img src={this.getSrc(restaurant.id)} alt=""/>
								<p>Address</p>
								<p>Opening hours</p>
								<p>blahblah</p>
								<div>Reviews
									<div>blah</div>
									<div>blah</div>
								</div>	
							</div>
						</li>
					)}
				</ul>
			</div>
		);}
	}
}

export default FloatingPanel;