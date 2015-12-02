'use strict';

import React from 'react';

import { ListDivider } from 'material-ui';
import { List } from 'material-ui';
import { ListItem } from 'material-ui';

export class SidebarNav extends React.Component {

	render() {
		return (
			<div className="sidebar-nav">
				<List>
					<ListItem primaryText="Игровой зал" />
					<ListItem primaryText="Лотерея" />
					<ListItem primaryText="Турниры" />
					<ListItem primaryText="Акции" />
					<ListItem primaryText="Магазин фишек" />
					<ListItem primaryText="Новости" />
					<ListItem primaryText="Видео" />
					<ListItem primaryText="Скачать plug-in" />
				</List>
			</div>
		);
	}
}

export default SidebarNav;
