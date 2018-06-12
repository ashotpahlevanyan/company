import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PublicationItem extends Component {
	render() {
		const publication = this.props.publication;
		return(
			<li>
				<label>{publication.authors}</label>
				<h3 className="title"><a href={publication.url} className="company">{publication.title},</a> {publication.journal} ({publication.year}), Vol {publication.vol}:{publication.num}, pp. {publication.pages}</h3>
			</li>
		);
	}
}

class Publications extends Component {
	render() {
		const publications = this.props.publications;
		const pubList = publications.map((pub) =>
			<PublicationItem key={pub.title + '_' + pub.year} publication={pub} />
		);
		return (
			<section>
				<h2>Selected Publications</h2>
				<ul className="work">
					{pubList}
				</ul>
			</section>
		);
	}
}

Publications.propTypes = {
	publications: PropTypes.array.isRequired
};

export default Publications;