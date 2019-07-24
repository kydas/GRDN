import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentUserNotifications} from '../actions/NotificationsActions';
import NotificationEntry from './NotificationEntry';

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUserNotifications: () => {dispatch(getCurrentUserNotifications())}
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.userNotifications
  }
}

class ConnectableNotificationsScroll extends Component {

  constructor(props) {
    super(props);

    this.props.getCurrentUserNotifications();


  }

  render(){
    if (this.props.notifications == null) {
      return null;
    }
    return (
      <div className="notifications-scroll">
        <ul>
          {this.props.notifications.map((el) =>
            <NotificationEntry entry={el} key={el._id} />
          )}
        </ul>
      </div>
    )
  }
}


const NotificationsScroll = connect(mapStateToProps, mapDispatchToProps)(ConnectableNotificationsScroll);
export default NotificationsScroll;
