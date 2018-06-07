import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Navbar,
	Nav,
	NavItem } from 'reactstrap';

class Footer extends Component {
	render() {
		return(
			<footer className="footer">
				<Navbar>
					<Nav className="routes" navbar>
						<NavItem>
							<Link to="/">Home</Link>
						</NavItem>
						<NavItem>
							<Link to="/about">About</Link>
						</NavItem>
						<NavItem>
							<Link to="/team">Team</Link>
						</NavItem>
						<NavItem>
							<Link to="/portfolio">Works</Link>
						</NavItem>
						<NavItem>
							<Link to="/contact">Contact</Link>
						</NavItem>
					</Nav>
					</Navbar>
			</footer>
		);
	}
}

export default Footer;