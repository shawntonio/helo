import React from 'react';
import {withRouter, Link} from 'react-router-dom';

function Nav(props) {
	if (props.location.pathname !== '/') {
		return (
			<div>
				<Link to='/dashboard'>
					<button>Home</button>
				</Link>
				<Link to='/post'>
					<button>New Post</button>
				</Link>
				<Link to='/'>
					<button>Logout</button>
				</Link>
			</div>
		)
	} else return <></>
}

export default withRouter(Nav)