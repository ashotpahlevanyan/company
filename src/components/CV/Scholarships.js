import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CourseItem } from './Courses';

class Scholarships extends Component {
	render() {
		const scholarships = this.props.scholarships;
		const scholarshipList = scholarships.map((schol) =>
			<CourseItem key={schol.title + '_' + schol.date} course={schol}/>
		);
		return (
			<section>
				<h2>Scholarships</h2>
				<ul className="work">
					{scholarshipList}
				</ul>
			</section>
		);
	}
}

Scholarships.propTypes = {
	scholarships: PropTypes.array.isRequired
};

export default Scholarships;