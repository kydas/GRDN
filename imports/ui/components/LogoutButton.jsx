import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

class LogoutButton extends Component {

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    )
  }

  handleLogout = () => {
    let history = this.props.history;
    Meteor.logout(function(err) {
      if (err) {
        console.log(err.reason);
      } else {
        //On logout success, we redirect them to the login page.
        history.push({
          pathname: '/login'
        });
      }
    });
  }

}

export default withRouter(LogoutButton);
