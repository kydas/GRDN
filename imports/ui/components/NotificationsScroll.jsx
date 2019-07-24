import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNotificationsByUserId} from '../actions/NotificationsActions';

const mapDispatchToProps = dispatch => {
  return {
    getUserNotifications: (userId) => {
      getNotificationsByUserId(userId);
    }
  }
}

class ConnectableNotificationsScroll extends Component {

  constructor(props) {
    super(props);

    if (Meteor.userId()) {
      this.props.getUserNotifications(Meteor.userId());
    }

  }

  render(){
    return (
      <div className="notifications-scroll">
        i am scroll!
      </div>
    )
  }
}


const NotificationsScroll = connect(null, mapDispatchToProps)(ConnectableNotificationsScroll);
export default NotificationsScroll;
