import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faBell, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class GardenPlantEntry extends Component {

  render(){
    if (!this.props.plantEntry) {
        return
    }

    return (
      <div className="plant-entry">
        <h3>{this.props.plantEntry.cachedData.common_name} x {this.props.plantEntry.qty}</h3>
        <div className="plant-entry-controls">
          <button><FontAwesomeIcon icon={faSearchPlus} /></button>
          <button><FontAwesomeIcon icon={faBell} /></button>
          <button><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    )
  }
}
