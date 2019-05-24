import React from 'react';
import './dashboard.css';

function Dashboard(props) {
	return (
		<div>
			<div className="box-model">Box Model</div>

			<div className="float-display-parent">
				<div className="float-display"></div>
				<div className="float-display"></div>
				<div className="float-display"></div>
			</div>
		</div>
	)
}

export default Dashboard