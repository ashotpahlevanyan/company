import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import PortfolioDescription from './PortfolioDescription';

const descriptions = [
	{
		contributors: [
			{
				url: '',
				name: 'Ashot Pahlevanyan'
			},
			{
				url: '',
				name: 'Ashot Pahlevanyan'
			}
		],
		title: 'Jewelry',
		technologies: 'ReactJS, Redux, HTML5, CSS3, SEO',
		url: ''
	},
	{
		contributors: [
			{
				url: '',
				name: 'Ashot Pahlevanyan'
			},
			{
				url: '',
				name: 'Ashot Pahlevanyan'
			}
		],
		title: 'Jewelry',
		technologies: 'ReactJS, Redux, HTML5, CSS3, SEO',
		url: ''
	},
	{
		contributors: [
			{
				url: '',
				name: 'Ashot Pahlevanyan'
			},
			{
				url: '',
				name: 'Ashot Pahlevanyan'
			}
		],
		title: 'Jewelry',
		technologies: 'ReactJS, Redux, HTML5, CSS3, SEO',
		url: ''
	}
];

const items = [
	{
		original: 'images/1.jpg',
		thumbnail: 'images/1t.jpg',
		description: <PortfolioDescription info={descriptions[0]} />
	},
	{
		original: 'images/2.jpg',
		thumbnail: 'images/2t.jpg',
		description:  <PortfolioDescription info={descriptions[1]} />
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
	slideInterval: 2000,
	slideDuration: 450,
	showBullets: false,
	showPlayButton: false,
	thumbnailPosition: 'top',
	infinite: true,
	useBrowserFullscreen: true,
	autoPlay: true
};

class Gallery extends Component {
	render() {
		return (
			<ImageGallery items={items} {...settings}/>
		);
	}
}

Gallery.propTypes = {
	items: PropTypes.array.isRequired
};

export default Gallery;