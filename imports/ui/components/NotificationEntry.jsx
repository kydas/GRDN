import React, {Component} from 'react';
import NotificationStrings from '../strings/NotificationStrings';

export default class NotificationEntry extends Component {

  render() {
    if (this.props.entry == null) {
      return null;
    }

    return(
      <li className="notification-entry">
        {NotificationStrings()[this.props.entry.type](this.props.entry.plantId, this.props.entry.gardenId)}
      </li>
    )
  }
}
