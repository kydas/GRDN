import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faBell, faShower, faTrash } from '@fortawesome/free-solid-svg-icons';
import NotificationsIndicator from './NotificationsIndicator';
import { withRouter } from 'react-router-dom';

class GardenPlantEntry extends Component {

  render(){
    if (!this.props.plantEntry) {
        return
    }

    return (
      <div className="plant-entry">
        <h3>{this.props.plantEntry.qty} x {this.props.plantEntry.cachedData.common_name} </h3>
        <div className="plant-entry-controls">
          <button><FontAwesomeIcon icon={faSearchPlus} onClick={this.handleDetailsClick} /></button>
          <button><FontAwesomeIcon icon={faBell} />
            <NotificationsIndicator count="2" />
          </button>
          <button><FontAwesomeIcon icon={faShower} /></button>
          <button><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    )
  }

  handleDetailsClick = () => {
    this.props.history.push({
      pathname: '/plant/' + this.props.plantEntry.trefleId
    });
  }
}

export default withRouter(GardenPlantEntry);
