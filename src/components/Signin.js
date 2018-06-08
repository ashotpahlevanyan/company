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

	return errors;
};

const warn = values => {
	const warnings = {};
	if(!values) {
		warnings.values = 'Please fill the form.'
	}
	return warnings;
};


class Signin extends Component {
	handleFormSubmit(formProps) {
		console.log(formProps);
	}


	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="signForm">
				<h2 className="text-center formHeadline">Sign In Form</h2>
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
				<FormGroup className="text-center">
					<Button type="submit" color="primary" disabled={pristine || submitting}>Sign In</Button>{' '}
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
})(Signin);