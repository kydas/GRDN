import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class LogoutButton extends Component {

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    )
  }

  handleLogout = () => {
    Meteor.logout(function(err) {
      if (err) {
        console.log(err.reason);
      }
    });
  }

}
