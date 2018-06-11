import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CourseItem } from './Courses';

class Trainings extends Component {
	render() {
		const trainings = this.props.trainings;
		const trainingsList = trainings.map((course) => <CourseItem key={course.title} course={course} />);
		return (
			<section>
				<h2>Trainings</h2>
				<ul className="work">
					{trainingsList}
				</ul>
			</section>
		);
	}
}


Trainings.propTypes = {
	trainings: PropTypes.array.isRequired
};

export default Trainings;
