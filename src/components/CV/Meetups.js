import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CourseItem } from './Courses';

class Meetups extends Component {
	render() {
		const meetups = this.props.meetups;
		const meetupsList = meetups.map((course) => <CourseItem key={course.title + '_' + course.date} course={course} />);
		return (
			<section>
				<h2>Meetups</h2>
				<ul className="work">
					{meetupsList}
				</ul>
			</section>
		);
	}
}

Meetups.propTypes = {
	meetups: PropTypes.array.isRequired
};

export default Meetups;