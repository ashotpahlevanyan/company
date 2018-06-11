import React, { Component } from 'react';

class UpTopTop extends Component {
	handleClick = function(e) {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	render() {
		return (
			<div class="center noPrint upToTop hide">
				<button onClick={this.handleClick.bind(this)} class="up"><i class="fas fa-chevron-up"></i></button>
			</div>
		);
	}
}

export default UpTopTop;