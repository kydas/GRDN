import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons';


export default class LoadingSpinner extends Component {

  render() {
    return (
      <div className="spinner-holder">
        <div className="spinner">
          <FontAwesomeIcon icon={faSeedling} />
        </div>
      </div>
    )
  }
}
