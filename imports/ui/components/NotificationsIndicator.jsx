import React, {Component} from 'react';

export default class NotificationsIndicator extends Component {

  render () {
    return (
      <div className="notifications-indicator">
        {this.props.count}
      </div>
    )
  }
}
