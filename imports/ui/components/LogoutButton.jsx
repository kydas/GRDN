import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { dismissModal } from '../actions/UIActions'
import {clearCurrentUserNotifications} from "../actions/NotificationsActions";


const mapDispatchToProps = dispatch => {
  return {
    dismissModal: () => {dispatch(dismissModal())},
    clearNotifs: () => {dispatch(clearCurrentUserNotifications())}
  }
}

class ConnectableLogoutButton extends Component {

  render() {
    return (
      <button className="purple" onClick={this.handleLogout}>Logout</button>
    )
  }

  handleLogout = () => {
    let history = this.props.history;
    let that = this;
    Meteor.logout(function(err) {
      if (err) {
        console.log(err.reason);
      } else {
        //On logout success, we redirect them to the login page.
        that.props.clearNotifs();
        that.props.dismissModal();
        history.push({
          pathname: '/search'
        });
      }
    });
  }

}


const LogoutButton = connect(null, mapDispatchToProps)(withRouter(ConnectableLogoutButton));

export default LogoutButton;
