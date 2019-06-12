import React, {Component} from 'react';

export default class NewUserForm extends Component {


  render() {
    return (
      <div className="new-user-form">
        <h2>Create a new user</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleUsernameChange} />
          <input type="text" name="email" onChange={this.handleEmailChange} />
          <input type="password" name="password" onChange={this.handlePasswordChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    Meteor.call("newUser",
      this.state.username,
      this.state.email,
      this.state.password
    )
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }
}
