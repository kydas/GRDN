import React, {Component} from 'react';

/*
  The number that appears above the notifications button showing active
  notifications.
*/

export default class NotificationsIndicator extends Component {

  render () {
    if (this.props.hide || this.props.count == 0) return null;

    let overflow = this.props.count > 99;
    let value = overflow ? "99+": this.props.count;
    let overflowClass = overflow? "overflow" : "";

    return (
      <div className={overflowClass + " notifications-indicator"}>
        {value}
      </div>
    )
  }
}
