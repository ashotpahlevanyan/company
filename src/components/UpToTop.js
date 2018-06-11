import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class UpTopTop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollTop: 0
		};

		this.handleClick = this.handleClick.bind(this);
		//this.handleScroll = this.handleScroll.bind(this);
	}

	// componentDidMount() {
	// 	window.addEventListener('scroll', this.handleScroll);
	// }
	// componentWillUnmount() {
	// 	window.addEventListener('scroll', this.handleScroll);
	// }
	// handleScroll() {
	// 		let winHeight = window.innerHeight;
	//
	// 		// Annoying to compute doc height due to browser inconsistency
	// 		let body = document.body;
	// 		let html = document.documentElement;
	// 		let docHeight = Math.max( body.scrollHeight, body.offsetHeight,
	// 			html.clientHeight, html.scrollHeight, html.offsetHeight );
	//
	// 		let value = document.body.scrollTop;
	// 		this.setState({scrollTop: docHeight});
	// }
	handleClick = function() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	render() {
		return (
			<div className={this.state.scrollTop > 200 ? "center noPrint upToTop" : "center noPrint upToTop"}>
				<button onClick={this.handleClick.bind(this)} className="up"><FontAwesome name="chevron-up" /></button>
			</div>
		);
	}
}

export default UpTopTop;