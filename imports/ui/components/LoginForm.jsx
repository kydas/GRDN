import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class LoginForm extends Component {

  render() {
    return (
      <form>
        <input type="text" name="username" autoComplete="username" onChange={this.handleUsernameChange} />
        <input type="password" name="password" autoComplete="current-password" onChange={this.handlePasswordChange}/>
        <input type="submit" onClick={this.handleLogin}/>
      </form>
    )
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log(Meteor.user());
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
