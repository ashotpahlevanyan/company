import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Hobbies extends Component {
	render() {
		const hobbies = this.props.hobbies;
		return (
			<section>
				<h2>Hobbies</h2>
				<ul className="work">
					<li className="hobbies">{hobbies}</li>
				</ul>
			</section>
		);
	}
}

Hobbies.propTypes = {
	hobbies: PropTypes.string.isRequired
};

export default Hobbies;