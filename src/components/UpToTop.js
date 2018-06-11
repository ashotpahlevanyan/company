import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class UpTopTop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollTop: 0
		};
		this.handleClick = this.handleClick.bind(this);
		// this.myFunction = this.myFunction.bind(this);
		// this.applyRef = this.applyRef.bind(this);
	}

	// myFunction() {
	// 	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	// 		console.log(document.body.scrollTop);
	// 		this.setState({class: 'center noPrint upToTop'});
	// 	} else {
	// 		console.log(document.body.scrollTop);
	// 		this.setState({class: 'center noPrint upToTop hide'});
	// 	}
	// }
	// componentDidMount() {
	// 	window.addEventListener('scroll', this.myFunction);
	//
	// }
	// componentWillUnmount() {
	// 	window.removeEventListener('scroll', this.myFunction);
	// }
	handleClick = function() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		this.setState({...this.state, class:"center noPrint upToTop hide Yalla"});
	};
	// applyRef = ref => {
	// 	this.vn = ref;
	// 	this.vn.addEventListener('scroll', this.myFunction);
	// };
	render() {
		return (
			<div className="center noPrint upToTop">
				<button onClick={this.handleClick.bind(this)} className="up"><FontAwesome name="chevron-up" /></button>
			</div>
		);
	}
}

export default UpTopTop;