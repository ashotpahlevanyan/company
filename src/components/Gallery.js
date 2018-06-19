import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const items = [
	{
		original: 'images/1.jpg',
		thumbnail: 'images/1t.jpg',
		description:
			<div className="description">
				<a className="title" href="https://ashotpahlevanyan.github.io/jewelry">Jewelry</a>
				<p><label>Technologies:</label> HTML5, CSS3, SEO</p>
				<p className="contributors"><label>Contributors:</label>
					<a className="link" href="https://ashotpahlevanyan.github.io">Ashot Pahlevanyan</a>
					<a className="link" href="https://ashotpahlevanyan.github.io">Ashot Pahlevanyan</a>
				</p>
			</div>
	},
	{
		original: 'images/2.jpg',
		thumbnail: 'images/2t.jpg',
		description: 'Hello there'
	},
	{
		original: 'images/3.jpg',
		thumbnail: 'images/3t.jpg',
		description: 'Yalla'
	},
	{
		original: 'images/4.jpg',
		thumbnail: 'images/4t.jpg',
	},
	{
		original: 'images/5.jpg',
		thumbnail: 'images/5t.jpg',
	},
	{
		original: 'images/6.jpg',
		thumbnail: 'images/6t.jpg',
	},
	{
		original: 'images/7.jpg',
		thumbnail: 'images/7t.jpg',
	},
	{
		original: 'images/8.jpg',
		thumbnail: 'images/8t.jpg',
	},
	{
		original: 'images/9.jpg',
		thumbnail: 'images/9t.jpg',
	},
	{
		original: 'images/10.jpg',
		thumbnail: 'images/10t.jpg',
	},
	{
		original: 'images/11.jpg',
		thumbnail: 'images/11t.jpg',
	}
];

const settings = {
	slideInterval: 1000,
	slideDuration: 300,
	showBullets: false,
	showPlayButton: false,
	thumbnailPosition: 'top',
	infinite: true,
	useBrowserFullscreen: true
};

class Gallery extends Component {
	render() {
		return (
			<ImageGallery items={items} {...settings}/>
		);
	}
}

Gallery.propTypes = {
	prop: PropTypes.array.isRequired
};

export default Gallery;