import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin} from '@fortawesome/free-solid-svg-icons';

export default class MapMarker extends Component {
  render() {
    return (
      <div className="map-marker">
        <FontAwesomeIcon icon={faMapPin} />
      </div>
    )
  }
}
