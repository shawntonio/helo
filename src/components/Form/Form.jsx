import React, {useState} from 'react';
import Axios from 'axios';

function Form(props) {

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const addPost = () => {
		Axios.post('/api/post', {title, content})
		.then(res => props.history.push(`/post/${res.data.id}`))
		.catch(console.log)
	}

	return (
		<div>
			<input value={title} placeholder='Title' type="text" onChange={(e) => setTitle(e.target.value)} />
			<input value={content} placeholder='write something' type="text" onChange={(e) => setContent(e.target.value)} />
			<button onClick={addPost}>Post</button>
		</div>
	)
}

export default Form