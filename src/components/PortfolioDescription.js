import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PortfolioDescription extends Component {
	render() {
		const info = this.props.info;
		return (
			<div className="description">
				<a className="title" href={info.url}>{info.title}</a>
				<p><label>Technologies:</label> {info.technologies}</p>
				<p className="contributors"><label>Contributors:</label>
					{info.contributors.map((contributor) => <a className="link" href={contributor.url} key={contributor.name}>{contributor.name}</a> )}
				</p>
			</div>
		);
	}
}

PortfolioDescription.propTypes = {
	info: PropTypes.shape({
		contributors: PropTypes.arrayOf(PropTypes.shape({
			url: PropTypes.string,
			name: PropTypes.string
		})).isRequired,
		title: PropTypes.string.isRequired,
		technologies: PropTypes.string.isRequired,
		url: PropTypes.string
	}).isRequired
};

export default PortfolioDescription;