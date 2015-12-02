'use strict';

import React from 'react';

export class FeedItem extends React.Component {

	render() {
		return (
			<div>
				<b>name</b>: { this.props.userName }<br/>
				<b>email</b>: { this.props.userEmail }<br/>
				<b>password</b>: { this.props.userPassword }
				<hr/>
			</div>
		);
	}
}

export default FeedItem;
