'use strict';

import React from 'react';

import FeedItem from './FeedItem.js';

export class FeedList extends React.Component {

	render() {
		return (
				<div>
					<h3>User List:</h3>
					<hr/>
					{ this.props.items.map(item => {
						return (
							<FeedItem
								key={ item.key }
								userName={ item.userName }
								userEmail={ item.userEmail }
								userPassword={ item.userPassword } />
						);
					}) }
				</div>
		);
	}
}

export default FeedList;
