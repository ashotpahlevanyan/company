import React, { Component } from 'react';
import JsonData from './JsonData';
import Experience from './CV/Experience';
import Header from './CV/Header';
import Education from './CV/Education';
import Contacts from './CV/Contacts';
import Courses from './CV/Courses';
import Trainings from './CV/Trainings';
import Languages from './CV/Languages';
import Meetups from './CV/Meetups';
import Hobbies from './CV/Hobbies';
import Techstack from './CV/Techstack';
import Scholarships from './CV/Scholarships';
import Publications from './CV/Publications';

class Cv extends Component {

	render() {
		const userData = JsonData.AshotCVItems;
		return(
			<div>
				<Header user={userData.user} />
				<Contacts contacts={userData.contacts} />
				<Experience experience={userData.experience} />
				<Education education={userData.education} />
				<Techstack techstack={userData.teckstack} />
				<Trainings trainings={userData.trainings} />
				<Courses courses={userData.courses} />
				<Languages languages={userData.languages} />
				<Meetups meetups={userData.meetups} />
				<Scholarships scholarships={userData.scholarships} />
				<Publications publications={userData.publications} />
				<Hobbies hobbies={userData.hobbies} />
			</div>
		);
	}
}

export default Cv;