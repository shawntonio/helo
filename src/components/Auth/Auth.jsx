import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Auth(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {
		Axios.post('/auth', { username, password })
			.then(() => props.history.push('/dashboard'))
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
				<button>Log in</button>
				<button onClick={register}>Register</button>
			</div>
		</div>
	)
}

export default Auth