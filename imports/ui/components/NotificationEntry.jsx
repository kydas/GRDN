import React, {Component} from 'react';
import NotificationStrings from '../strings/NotificationStrings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class NotificationEntry extends Component {

  render() {
    if (this.props.entry == null || this.props.entry.plant == null) {
      return null;
    }

    return(
        <li className="notification-entry">
          <div className="text">
            {NotificationStrings()[this.props.entry.type](this.props.entry.plant.cachedData.common_name, this.props.entry.garden.name)}
          </div>
          <div className="controls">
            <a href={`${window.location.protocol}//${window.location.host}/garden/${this.props.entry.gardenId}/${this.props.entry.plantId}`}><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
            <a onClick={this.handleDelete}><FontAwesomeIcon icon={faTrash} /></a>
          </div>
        </li>
    )
  }

  handleDelete = () => {
    this.props.deleteAction(this.props.entry._id);
  }
}
