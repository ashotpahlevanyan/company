import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class CourseItem extends Component {
	render() {
		const course = this.props.course;
		return (
			<li>
				<h3 className="title">
					{course.title} {course.organiser ? ', ' : ''}
					{course.organiser ? <a href={course.url ? course.url : ""} className="company">{course.organiser}</a> : ''}
					{course.foundation ? course.foundation : ''}
				</h3>
				{course.date ? <span className="">{course.date}</span> : ''}
			</li>
		);
	}
}

class Courses extends Component {
	render() {
		const courses = this.props.courses;
		const coursesList = courses.map((course) => <CourseItem key={course.title} course={course} />);
		return (
			<section>
				<h2>Self-Paced Courses</h2>
				<ul className="work">
					{coursesList}
				</ul>
			</section>
		);
	}
}

CourseItem.propTypes = {
	course: PropTypes.shape().isRequired
};

Courses.propTypes = {
	courses: PropTypes.array.isRequired
};


export default Courses;
