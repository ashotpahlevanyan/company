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
					<Route path="/about" component={About} />
					<Route path="/team" component={Team} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
					<Route path="/cv" component={Cv} />
				</main>
			</div>
		);
	}
}

export default Main;

