import React, {useState, useEffect} from 'react';
import './dashboard.css';
import Axios from 'axios';

function Dashboard(props) {

	const [posts, setPosts] = useState([])
	const [myPosts, toggleMyPosts] = useState(false)

	useEffect(() => {
		if (myPosts) {
			Axios.get(`/api/myposts`)
			.then(res => setPosts(res.data))
		} else {
			Axios.get(`/api/othersposts`)
			.then(res => setPosts(res.data))
		}
	}, [myPosts])

	return (
		<div>
			{posts.map(post => (
				<div key={post.id} >
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	)
}

export default Dashboard