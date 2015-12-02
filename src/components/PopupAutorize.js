'use strict';

import React from 'react';

import { Dialog } from 'material-ui';

export class PopupAutorize extends React.Component {

	render() {

		return (
			<div className="popup-autorize">
				<Dialog
					title="Dialog With Standard Actions"
					secondaryText="Зарегистрируйся и получи +1000 рублей"
					>
				</Dialog>
			</div>
		);
	}

_onDialogSubmit() {
    console.log('Submitting');
  }
}

export default PopupAutorize;
