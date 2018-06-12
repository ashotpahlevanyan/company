import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Techstack extends Component {
	render() {
		const techstack = this.props.techstack;
		const techList = techstack.map((tech) =>
			<li key={tech.language}>
				<p className="stack">
					<label>{tech.language}: </label>
					{tech.technologies}
				</p>
			</li>
		);
		return ( {techstack} ?
			<section>
				<h2>Tech Stack</h2>
				<ul className="work">
					{techList}
				</ul>
			</section> : ''
		);
	}
}

Techstack.propTypes = {
	techstack: PropTypes.array.isRequired
};

export default Techstack;