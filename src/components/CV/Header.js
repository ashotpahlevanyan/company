import React, { Component } from 'react';

class CvHeader extends Component {
	render() {
		const user = this.props.user;
		return (
			<section>
				<div className="clearfix">
					<div className="left">
						<h1 className="vspace baselineskip upper"><span className="bigger">C</span>urriculum <span className="bigger">V</span>itae</h1>
						<h2 className="vspace upper">
							<span className="bigger">{user.name[0]}</span>{user.name.slice(1)}
							<span className="bigger"> {user.surname[0]}</span>{user.surname.slice(1)}</h2>
					</div>
					<figure className="avatar right">
						<img src={user.avatar} alt="avatar" className="" />
					</figure>
				</div>
			</section>
		);
	}
}

export default CvHeader;