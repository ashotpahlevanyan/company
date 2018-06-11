import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class Contacts extends Component {
	render() {
		const contacts = this.props.contacts;
		const contactsList = contacts.map((contact) =>
			<li key={contact.name}>
				<FontAwesome name={contact.icon} />
				<label htmlFor={contact.name}>{contact.name}:</label>
				<a id={contact.name} href={contact.url}>{contact.value}</a>
			</li>
		);
		return (
			<section>
				<h2>Contacts</h2>
				<ul className="contacts">
					{contactsList}
				</ul>
			</section>

		);
	}
}

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired
};

export default Contacts;