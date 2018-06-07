import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar color="light" className="header" expand="md">
				<Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
				<Link to="/" className="company">Company</Link>
				<NavbarToggler onClick={this.toggle}>
					<FontAwesome name={this.state.isOpen ? "times" : "bars"}/>
				</NavbarToggler>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto routes" navbar>
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
				</Collapse>
			</Navbar>
		);
	}
}


export default Header;