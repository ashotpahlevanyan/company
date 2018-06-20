import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';


const team = [
	{
		name: 'Ashot Pahlevanyan',
		url: 'https://ashot.pahlevanyan.org',
		avatar: './images/myphoto.jpg',
		position: 'CEO & Founder, Full Stack Developer',
		main: 'Development of Web & Mobile Applications'
	},
	{
		name: 'Ashot Pahlevanyan',
		url: 'https://ashot.pahlevanyan.org',
		avatar: './images/myphoto.jpg',
		position: 'Full Stack Developer, CEO & Founder',
		main: 'Web & Mobile application design'
	},
	{
		name: 'Ashot Pahlevanyan',
		url: 'https://ashot.pahlevanyan.org',
		avatar: './images/myphoto.jpg',
		position: 'Full Stack Developer, CEO & Founder',
		main: 'Web & Mobile application design'
	},
	{
		name: 'Ashot Pahlevanyan',
		url: 'https://ashot.pahlevanyan.org',
		avatar: './images/myphoto.jpg',
		position: 'Full Stack Developer, CEO & Founder',
		main: 'Web & Mobile application design'
	},
	{
		name: 'Ashot Pahlevanyan',
		url: 'https://ashot.pahlevanyan.org',
		avatar: './images/myphoto.jpg',
		position: 'Full Stack Developer, CEO & Founder',
		main: 'Web & Mobile application design'
	}
];


class Team extends Component {
	render() {
		const teamList = team.map((member) =>
			<Card key={member.name} style={{width: "15rem"}}>
				<CardImg top width="70%" src={member.avatar} alt={member.name} />
				<CardBody>
					<CardTitle>{member.name}</CardTitle>
					<CardSubtitle>{member.position}</CardSubtitle>
					<CardText>{member.main}</CardText>
					<Button href={member.url} color="primary" outline size="sm">Show More</Button>
				</CardBody>
			</Card>
		);
		return (
			<div className="team">{teamList}</div>
		);
	}
}

export default Team;