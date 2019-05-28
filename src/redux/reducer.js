const initialState = {
	username: '',
	user_id: null,
	profile_pic: null,
	loading: false
}

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (username, user_id) => {
	return {
		type: UPDATE_USER,
		payload: {username, user_id}
	}
}

export default function reducer(state = initialState, {type, payload}) {
	switch(type) {
		case `${UPDATE_USER}_PENDING`:
			return {
				...state,
				loading: true
			}
		case `${UPDATE_USER}_FULFILLED`:
			return {
				...state,
				...payload,
				loading: false
			}
		default:
			return state;
	}
}