'use strict';

import React from 'react';

import SidebarLogo from './SidebarLogo.js';
import SidebarUser from './SidebarUser.js';
import SidebarNav from './SidebarNav.js';
import FeedList from './FeedList.js';
import PopupExperiment from './PopupExperiment.js';

export class Feed extends React.Component {

	constructor() {
		super();

		const items = [
			{ key: '00001', userName: 'anton', userEmail: 'anton@gmail.com', userPassword: '12345' },
			{ key: '00002', userName: 'porhim', userEmail: 'porhim@gmail.com', userPassword: '12345' },
			{ key: '00003', userName: 'ihor', userEmail: 'ihor@gmail.com', userPassword: '12345' },
			{ key: '00004', userName: 'julia', userEmail: 'julia@gmail.com', userPassword: '12345' },
			{ key: '00005', userName: 'nastya', userEmail: 'nastya@gmail.com', userPassword: '12345' },
		];

		this.state = {
			items: items
		};
	}

	render() {
		return (
			<div>
				<PopupExperiment />
				<div className="sidebar">
					<SidebarLogo />
					<SidebarUser />
					<SidebarNav />
				</div>
				<div className="wrapper">
					<FeedList items={ this.state.items } />
				</div>
			</div>
		);
	}
}

export default Feed;
