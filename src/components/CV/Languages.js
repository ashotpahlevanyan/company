import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Languages extends Component {
	render() {
		const languages = this.props.languages;
		const languageList = languages.map((language) =>
			<li className="languages" key={language.language}>{language.language} ({language.fluency}){languages.length > 1 ? ', ': ''}</li>
		);
		return (
			<section>
				<h2>Languages</h2>
				<ul className="">{languageList}</ul>
			</section>
		);
	}
}

Languages.propTypes = {
	languages: PropTypes.array.isRequired
};

export default Languages;