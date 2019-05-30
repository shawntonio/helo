import Axios from "axios";

const initialState = {
	username: '',
	user_id: null,
	profile_pic: null,
	loading: false
}

export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(username, password) {
	const user = Axios.post('/auth/login', { username, password })
	return {
		type: UPDATE_USER,
		payload: user
	}
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case `${UPDATE_USER}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${UPDATE_USER}_FULFILLED`:
			return {
				...state,
				username: payload.data.username,
				user_id: payload.data.user_id,
				loading: false
			};
		default:
			return state;
	}
}