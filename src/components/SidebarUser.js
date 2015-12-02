'use strict';

import React from 'react';

import PopupLog from './PopupLog.js';
import PopupReg from './PopupReg.js';

import { List, ListItem, Avatar } from 'material-ui';

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
            <PopupReg />
            <PopupLog />
        </div>
      </div>
    );
  }
}

export default SidebarUser;
