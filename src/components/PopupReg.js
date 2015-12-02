'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

export class PopupReg extends React.Component {

  constructor() {
    super();
    this.state = {
      modal: false,
      showPopup: false,
    };
    this._showPopup = this._showPopup.bind(this);
    this._dismissPopup = this._dismissPopup.bind(this);
  }

  render() {

    let autorizationActions = [
      <RaisedButton
        key={1}
        label="Отмена"
        secondary={true}
        onTouchTap={this._dismissPopup} />,

      <RaisedButton
        style={{ marginLeft: '10px' }}
        key={2}
        label="Войти"
        primary={true}
        onTouchTap={this._submitPopup} />
    ];

    return (
      <span style={{ marginRight: '10px' }}>
      
        <RaisedButton
          label="Pегистрация"
          primary={true}
          onTouchTap={this._showPopup} />

        <Dialog
          contentStyle={{
            textAlign: 'center',
            maxWidth: '304px',
          }}
          title="Быстрая регистрация"
          ref="autorizationPopup"
          open={this.state.showPopup}
          onRequestClose={this._dismissPopup}
          actions={autorizationActions} >

          <TextField
            fullWidth={true}
            floatingLabelText="Email"
            hintText="Введите Email" />

          <TextField
            fullWidth={true}
            floatingLabelText="Пароль"
            hintText="Придумайте Пароль" />

        </Dialog>

      </span>
    );
  }


  _submitPopup() {
    console.log('Submitting');
  }

  _showPopup() {
    this.setState({
      showPopup: true,
    });
  }

  _dismissPopup() {
    this.setState({
      showPopup: false,
    });
  }

}

export default PopupReg;
