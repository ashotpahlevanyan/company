import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExperienceItem extends Component {
	render() {
		const item = this.props.item;
		return(
			<li>
				<h3 className="title">{item.title}</h3>
				<a href={item.url} className="company">{item.company},</a>
				<span className="years">{item.from.month} {item.from.year} -- {item.to.month} {item.to.year}</span>
				<div className="tech">
					{item.responsibility ? <p className="stack"><label>Responsible for: </label>{item.responsibility}</p> : ''}
					{item.stack ? <p className="stack"><label>Stack: </label>{item.stack}</p> : ''}
					{item.projects && item.projects.length ? <div className="stack"><label>Projects:</label><ul className="projects">
						{item.projects.map((project) =><li key={project.title}><a href={project.url}>{project.title}</a></li>)}</ul></div> : ''}
				</div>
			</li>
		);
	}
}

class Experience extends Component {
	render() {
		const experienceList = this.props.experience.map((item) =>
			<ExperienceItem key={item._id} item={item} />
		);

		return (
			<section>
				<h2>Work Experience</h2>
				<ul className="work">
					{experienceList}
				</ul>
			</section>
		);
	}
}

ExperienceItem.propTypes = {
	item: PropTypes.shape({
		_id: PropTypes.string
	}).isRequired
};

Experience.propTypes = {
	experience: PropTypes.array.isRequired
};

export default Experience;