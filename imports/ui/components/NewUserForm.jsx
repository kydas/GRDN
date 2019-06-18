import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class NewUserForm extends Component {

  constructor(props) {
      super(props);

      this.state = {
        username: "",
        email: "",
        password: "",
        errorMessage: null
      }
  }

  render() {
    return (
      <div className="new-user-form">
        <h2>Create a new user</h2>
        { this.state.errorMessage != null &&
          <p className="error-message">Uh oh! {this.state.errorMessage}</p>
        }
        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" name="username" onChange={this.handleUsernameChange} />
          Email:
          <input type="text" name="email" onChange={this.handleEmailChange} />
          Password:
          <input type="password" name="password" onChange={this.handlePasswordChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }

  handleSubmit = (event) => {
    let history = this.props.history;
    event.preventDefault();
    Meteor.call("newUser",
      this.state.username,
      this.state.email,
      this.state.password,
      (err) => {
        if (err != null) {
          this.setState({
            errorMessage: err.reason
          })
        } else {
            this.setState({errorMessage: null});
            Meteor.loginWithPassword(this.state.username, this.state.password);
            this.props.history.push({
              pathname: '/'
            });
        }
      }
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

export default withRouter(NewUserForm);
