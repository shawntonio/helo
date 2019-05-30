import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Post(props) {
	const [post, setPost] = useState({})
	useEffect(() => {
		Axios.get(`/api/post?id=${props.match.params.id}`)
		.then(res => {
			setPost(res.data[0])
		}).catch(console.log)
	}, [])
	
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	)
}

export default Post