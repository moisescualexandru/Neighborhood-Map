import React, { Component } from 'react';
import RestaurantIcon from './icons/menu-placeholder-300x300.jpg';

class FloatingPanel extends Component {
	render() {
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
								<p>{restaurant.address}</p>
								<img src={RestaurantIcon} alt=""/>
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
		);
	}
}

export default FloatingPanel;