'use strict';

import React from 'react';

import { ListDivider } from 'material-ui';
import { List } from 'material-ui';
import { ListItem } from 'material-ui';
import { Avatar } from 'material-ui';

import { RaisedButton } from 'material-ui';
import { FlatButton } from 'material-ui';

export class SidebarUser extends React.Component {

	render() {
		return (
			<div className="sidebar-user">
				<div className="sidebar-user_motivation">
					<List>
						<ListItem
							leftAvatar={<Avatar src="img/motivation.png" />}
							secondaryText="Зарегистрируйся и получи +1000 рублей"
							secondaryTextLines={2} />
					</List>
				</div>
				<div className="sidebar-user_autorization">
					<List>
						<RaisedButton label="Регистрация" primary={true} />
						<FlatButton label="Вход" />
					</List>
					<ListDivider/>
				</div>
			</div>
		);
	}
}

export default SidebarUser;
