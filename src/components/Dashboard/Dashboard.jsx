import React, {useState, useEffect} from 'react';
import './dashboard.css';
import Axios from 'axios';

function Dashboard(props) {

	const [posts, setPosts] = useState([])
	const [myPosts, toggleMyPosts] = useState(false)

	useEffect(() => {
		Axios.get()
	}, [myPosts])

	return (
		<div>
			
		</div>
	)
}

export default Dashboard