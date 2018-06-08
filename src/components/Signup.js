import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import rules from './ValidationRules';

// import * as actions from '../actions';

import {
	Form,
	FormGroup,
	Button } from 'reactstrap';

const validate = values => {
	const errors = {};
	if(!values.name) {
		errors.name='Required';
	} else if(values.name.length < 2) {
		errors.name = 'Must be min 2 characters';
	}
	if(!values.family) {
		errors.family='Required';
	} else if(values.family.length < 2) {
		errors.family = 'Must be 2 characters or more';
	}
	if (!values.username) {
		errors.username = 'Required';
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less';
	} else if (values.username.length < 2) {
		errors.username = 'Must be 2 characters or more';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if(!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 6) {
		errors.password = 'Must be 6 characters or more';
	}
	if(!values.repeatPassword) {
		errors.repeatPassword = 'Required';
	} else if (values.repeatPassword.length < 6) {
		errors.repeatPassword = 'Must be 6 characters or more';
	} else if(values.repeatPassword !== values.password) {
		errors.repeatPassword = 'Passwords must match.'
	}

	return errors;
};

const warn = values => {
	const warnings = {};
	if(!values) {
		warnings.values = 'Please fill the form.'
	}
	return warnings;
};


class Signup extends Component {
	handleFormSubmit(formProps) {
		console.log(formProps);
	}


	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="signForm">
				<h2 className="text-center formHeadline">Sign Up Form</h2>
				<Field
					name="name"
					component={rules.renderField}
					type="text"
					label="Name"
					validate={[rules.required]}
					placeholder="name"
					className="form-control"
					warn={rules.alphaNumeric}
				/>
				<Field
					name="family"
					component={rules.renderField}
					type="text"
					label="Family"
					validate={[rules.required]}
					placeholder="family"
					className="form-control"
					warn={rules.alphaNumeric}
				/>
				<Field
					name="username"
					component={rules.renderField}
					type="text"
					label="Username"
					validate={[rules.required, rules.minLength(2)]}
					placeholder="user"
					className="form-control"
					warn={rules.alphaNumeric}
				/>
				<Field
					name="email"
					component={rules.renderField}
				  type="text"
				  label="Email"
				  validate={rules.email}
				  placeholder="you@domain.com"
				  className="form-control"
				  warn={rules.aol}
				/>
				<Field
					name="password"
					component={rules.renderField}
					type="password"
					label="Password"
					validate={rules.minLength(6)}
					placeholder="type password"
					className="form-control"
				/>
				<Field
					name="repeatPassword"
					component={rules.renderField}
					type="password"
					label="Password Again"
					validate={rules.minLength(6)}
					placeholder="repeat password"
				  className="form-control"
				/>
				<FormGroup className="text-center">
					<Button type="submit" color="primary" disabled={pristine || submitting}>Sign Up</Button>{' '}
					<Button type="button" color="secondary" disabled={pristine || submitting} onClick={reset}>Reset</Button>
				</FormGroup>
			</Form>
		);
	}
}

export default reduxForm({
	form: 'signup',
	validate,
	warn
})(Signup);