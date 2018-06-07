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
		this.closeNavbar = this.closeNavbar.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);

		this.state = {
			isOpen: false,
		};
	}
	componentWillMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	closeNavbar() {
		this.setState({
			isOpen: false
		});
	}
	handleClickOutside(event) {
		var t = event.target;
		if (this.state.isOpen && !t.classList.contains('navbar-toggler')) {
			this.closeNavbar();
		}
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
							<Link to="/" onClick={this.closeNavbar}>Home</Link>
						</NavItem>
						<NavItem>
							<Link to="/about" onClick={this.closeNavbar}>About</Link>
						</NavItem>
						<NavItem>
							<Link to="/team" onClick={this.closeNavbar}>Team</Link>
						</NavItem>
						<NavItem>
							<Link to="/portfolio" onClick={this.closeNavbar}>Works</Link>
						</NavItem>
						<NavItem>
							<Link to="/contact" onClick={this.closeNavbar}>Contact</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default Header;