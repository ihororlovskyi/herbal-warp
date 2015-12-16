import React from 'react'
import login from '../../../mock/api-login';

import { RaisedButton, Dialog, TextField } from 'material-ui';

class PopupLog extends React.Component {

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
        onTouchTap={this._handleLogin.bind(this)} />
    ];

    return (

      <span>
        <RaisedButton
          label="Вход"
          secondary={true}
          onTouchTap={this._showPopup} />

        <Dialog
          contentStyle={{
            textAlign: 'center',
            maxWidth: '304px',
          }}
          title="Вход"
          ref="autorizationPopup"
          open={this.state.showPopup}
          onRequestClose={this._dismissPopup}
          actions={autorizationActions} >

          <TextField
            ref="email"
            fullWidth={true}
            floatingLabelText="Email"
            hintText="Введите Email" />

          <TextField
            ref="password"
            fullWidth={true}
            floatingLabelText="Пароль"
            hintText="Введите Пароль" />

        </Dialog>

      </span>

    )
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

  _handleLogin() {

    console.log(this.refs.email);

    var email = this.refs.email.getValue();
    var password = this.refs.password.getValue();

    console.log({
      email : email,
      password : password
    });

    login({
      email : email,
      password : password,
    }, function(response) {
      console.log(response);
    })
  }
}

module.exports = PopupLog
