import React, { Component } from 'react';
import CarouselOur from './Carousel';

class Portfolio extends Component {
	render() {
		return (
			<div className="home">
				<h1 className="display-3">Portfolio Component!</h1>
				<CarouselOur />
			</div>
		);
	}
}

export default Portfolio;