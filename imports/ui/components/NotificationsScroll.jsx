import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentUserNotifications, deleteNotification} from '../actions/NotificationsActions';
import NotificationEntry from './NotificationEntry';

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUserNotifications: () => {dispatch(getCurrentUserNotifications())},
    deleteNotification: (notificationId)=> {dispatch(deleteNotification(notificationId))}
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.userNotifications
  }
}

class ConnectableNotificationsScroll extends Component {

  state = {
    notifications: []
  }

  constructor(props) {
    super(props);

    this.props.getCurrentUserNotifications();



  }

  static getDerivedStateFromProps(props, state){
    if (props.gardenId && props.plantId) {
      return ({
        notifications: props.notifications.filter(x => x.gardenId == props.gardenId && x.plantId == props.plantId)
      })
    } else {
      return ({
        notifications: props.notifications
      })
    }
  }

  render(){
    if (this.state.notifications == null || this.state.notifications.length == 0) {
      return "No notifications found!";
    }

    return (
      <div className="notifications-scroll">
        <ul>
          {this.state.notifications.map((el) =>
            <NotificationEntry entry={el} key={el._id} deleteAction={this.props.deleteNotification}/>
          )}
        </ul>
      </div>
    )
  }
}


const NotificationsScroll = connect(mapStateToProps, mapDispatchToProps)(ConnectableNotificationsScroll);
export default NotificationsScroll;
