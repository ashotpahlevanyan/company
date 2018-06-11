import React, { Component } from 'react';
import JsonData from './JsonData';
import Experience from './CV/Experience';
import Header from './CV/Header';
import Education from './CV/Education';

class Cv extends Component {

	render() {
		const userData = JsonData.AshotCVItems;
		return(
			<div>
				<Header user={userData.user} />
				<Experience experience={userData.experience} />
				<Education education={userData.education} />
			</div>
		);
	}
}

export default Cv;