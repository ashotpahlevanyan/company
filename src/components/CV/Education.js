import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EducationItem extends Component {
	render() {
		const {item} = this.props;
		const supervisorsList = item.supervisors.map((sup) => <li key={sup.url}><a href={sup.url}>{sup.name}</a></li>);
		return(
			<li>
				<h3 className="title">{item.school}</h3>
				<h4 className="subtitle">{item.degree}, {item.field}, ( {item.grade} )</h4>
				<a href={item.url} className="company">{item.department},</a>
				<span className="years">{item.from} -- {item.to}</span>
				<div className="tech">
					{ item.description.title ? <p className="stack"><label>{item.description.title}: </label>{item.description.text}</p> : '' }
					{ item.supervisors.length ? <div className="stack"><label>{item.supervisors.length ===1 ? 'Supervisor' : 'Supervisors'}: </label><ul className="collaborators">{supervisorsList}</ul></div> : ''}
				</div>
			</li>
		);
	}
}

EducationItem.propTypes = {
	item: PropTypes.shape({
		key: PropTypes.string
	}).isRequired
};
class Education extends Component {
	render() {
		const educationList = this.props.education.map((item) =>
			<EducationItem key={item._id} item={item} />);

		return (
			<section>
				<h2>Education</h2>
				<ul className="work">
					{educationList}
				</ul>
			</section>
		);
	}
}

Education.propTypes = {
	education: PropTypes.array.isRequired
};

export default Education;