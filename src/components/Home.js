import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {
	render() {
		return (
			<Jumbotron className="home">
				<h1 className="display-3">Home Component!</h1>
				<p className="lead">
					This is a simple hero unit
				</p>
				<hr className="my-2" />
				<p className="lead">
					<Button color="primary">Learn More</Button>
				</p>
			</Jumbotron>
		);
	}
}

export default Home;