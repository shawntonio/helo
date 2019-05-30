import React, { useState } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../redux/reducer';

function Auth(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {
		props.updateUser(username, password)
		props.history.push('/dashboard')
	}
	const login = () => {
		props.updateUser(username, password)
		props.history.push('/dashboard')
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