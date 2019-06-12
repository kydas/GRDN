import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class LoginForm extends Component {

  render() {
    return (
      <div className="log-in-form">
        <h2>Log in to GRDN</h2>
        <form>
          Username:
          <input type="text" name="username" autoComplete="username" onChange={this.handleUsernameChange} />
          Password:
          <input type="password" name="password" autoComplete="current-password" onChange={this.handlePasswordChange}/>
          <input type="submit" onClick={this.handleLogin}/>
        </form>
      </div>

    )
  }

  handleLogin = (event) => {
    event.preventDefault();
    Meteor.loginWithPassword(this.state.username, this.state.password, () => {
      console.log(Meteor.user());

    })
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }
}
