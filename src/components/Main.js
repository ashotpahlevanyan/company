import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Team from './Team';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Signup from './Signup';
import Signin from './Signin';
import Cv from './Cv';

class Main extends Component {
	render() {
		return (
			<div className="container">
				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/team" component={Team} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/cv" component={Cv} />
				</main>
			</div>
		);
	}
}

export default Main;

