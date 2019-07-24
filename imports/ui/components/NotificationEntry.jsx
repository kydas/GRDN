import React, {Component} from 'react';

export default class NotificationEntry extends Component {

  render() {
    if (this.props.entry == null) {
      return null;
    }

    return(
      <li className="notification-entry">
        {this.props.entry.type}
        -
        {this.props.entry.gardenId}
      </li>
    )
  }
}
