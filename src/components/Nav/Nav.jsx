import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
	if (props.location.pathname !== '/') {
		return (
			<div>
				{props.loading ? <p>...loading</p> : <h3>Hello {props.username}</h3>}
				<Link to='/dashboard'>
					<button>Home</button>
				</Link>
				<Link to='/new'>
					<button>New Post</button>
				</Link>
				<Link to='/'>
					<button>Logout</button>
				</Link>
			</div>
		)
	} else return <></>
}
const mapStateToProps = state => {
	const {username, loading} = state
	return {username, loading}
}

export default connect(mapStateToProps)(withRouter(Nav))