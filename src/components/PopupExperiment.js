'use strict';

import React from 'react';

import { RaisedButton, Dialog, FlatButton } from 'material-ui';

export class PopupExperiment extends React.Component {

	render() {

    let standardActions = [
      { text: 'Okay' }
    ];

		return (
			<div className="popup-experiment">
				<Dialog
					ref="autorizationPopup"
					actions={standardActions}
					title="Dialog With Standard Actions"
					>
					The actions in this window are created from the json that&#39;s passed in.
				</Dialog>

				<RaisedButton label="Standard Actions" onTouchTap={this._handleTouchTap} />
			</div>
		);
	}


  _handleTouchTap() {
    this.refs.autorizationPopup._show();
  }

}

export default PopupExperiment;
