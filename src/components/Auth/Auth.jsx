import React, { useState } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../redux/reducer';

function Auth(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {
		Axios.post('/auth', { username, password })
			.then(res => {
				props.updateUser(username, res.data.id)
				props.history.push('/dashboard')
			})
			.catch(err => console.log(err))
	}
	const login = () => {
		Axios.post('/auth/login', { username, password })
			.then(res => {
				props.updateUser(username, res.data.id)
				props.history.push('/dashboard')
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<div className='inputs'>
				<label htmlFor="username">Username:</label>
				<input id="username" type="text" onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div className='inputs'>
				<label htmlFor="password">Password:</label>
				<input id="password" type="text" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<div className="login-buttons">
				<button onClick={login}>Log in</button>
				<button onClick={register}>Register</button>
			</div>
		</div>
	)
}
const mapDispatchToProps = {
	updateUser
}

export default connect(null, mapDispatchToProps)(Auth)