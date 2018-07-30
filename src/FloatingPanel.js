import React, { Component } from 'react';

class FloatingPanel extends Component {
	render() {
		return(
			<div className='restaurant-list'>
				<ul className='restaurant-list'>
					{this.props.restaurants.map( restaurant => 
						<li className='item-list' key={restaurant.title}>
							<h3>{restaurant.title}</h3>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default FloatingPanel;