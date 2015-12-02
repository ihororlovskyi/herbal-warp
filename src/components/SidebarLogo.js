'use strict';

import React from 'react';

export class SidebarLogo extends React.Component {

	render() {
		return (
			<div className="sidebar-logo">
				<a href="/">
					<img src="img/logo.png" alt="Logo" />
				</a>
			</div>
		);
	}
}

export default SidebarLogo;
