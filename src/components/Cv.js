import React, { Component } from 'react';
import JsonData from './JsonData';
import Experience from './CV/Experience';
import Header from './CV/Header';
import Education from './CV/Education';
import Contacts from './CV/Contacts';
import Courses from './CV/Courses';
import Trainings from './CV/Trainings';
import Languages from './CV/Languages';

class Cv extends Component {

	render() {
		const userData = JsonData.AshotCVItems;
		return(
			<div>
				<Header user={userData.user} />
				<Contacts contacts={userData.contacts} />
				<Experience experience={userData.experience} />
				<Education education={userData.education} />
				<Trainings trainings={userData.trainings} />
				<Courses courses={userData.courses} />
				<Languages languages={userData.languages} />
			</div>
		);
	}
}

export default Cv;