import React, { Component } from 'react';
import RestaurantIcon from './icons/restaurang_map_icon_1x.png';

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
							{restaurant.isOpen && (
								<div className={restaurant.isOpen ? 'slidedown' : 'slideup'}>
									<p>{restaurant.address}</p>
									<img src={RestaurantIcon} alt=""/>
								</div>
							)}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default FloatingPanel;