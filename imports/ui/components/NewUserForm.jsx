import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { dismissModal } from '../actions/UIActions'

const mapDispatchToProps = dispatch => {
  return {
    dismissModal: () => {dispatch(dismissModal())}
  }
}

class ConnectableNewUserForm extends Component {

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
        { this.state.errorMessage != null &&
          <p className="error-message">Uh oh! {this.state.errorMessage}</p>
        }
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleUsernameChange} />
          <label>Email:</label>
          <input type="text" name="email" onChange={this.handleEmailChange} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handlePasswordChange} />
          <div className="action-buttons">
            <button className="purple" onClick={this.props.toggle}> Login </button>
            <button className="teal" onClick={this.handleSubmit}> Register </button>

          </div>
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
            this.props.dismissModal();

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

const NewUserForm = connect(null, mapDispatchToProps)(withRouter(ConnectableNewUserForm));
export default NewUserForm;
