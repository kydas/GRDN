import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentUserNotifications} from '../actions/NotificationsActions';

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
    console.log(this.props.notifications);
    return (
      <div className="notifications-scroll">
        
      </div>
    )
  }
}


const NotificationsScroll = connect(mapStateToProps, mapDispatchToProps)(ConnectableNotificationsScroll);
export default NotificationsScroll;
