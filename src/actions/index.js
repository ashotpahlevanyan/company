import * as types from './types';

export function signinUser({ email, password }) {
	return function (dispatch){
		dispatch({
			type: types.AUTH_USER,
			payload: "SignedIn"
		});
	};
}

export function signupUser({ email, password }) {
	return function (dispatch){
		dispatch({
			type: types.AUTH_USER,
			payload: "SignedUp"
		});
	};
}

export function signoutUser({ email, password }) {
	return function (dispatch){
		dispatch({
			type: types.UNAUTH_USER,
			payload: "SignedUp"
		});
	};
}
