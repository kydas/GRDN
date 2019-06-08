import React, {Component} from 'react';

/*
  The number that appears above the notifications button showing active
  notifications.
*/

export default class NotificationsIndicator extends Component {

  render () {
    return (
      <div className="notifications-indicator">
        {this.props.count}
      </div>
    )
  }
}
