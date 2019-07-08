import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faBell, faShower, faTrash } from '@fortawesome/free-solid-svg-icons';
import NotificationsIndicator from './NotificationsIndicator';
import { withRouter } from 'react-router-dom';
import { removePlantFromGarden } from '../actions/GardenActions';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
      removePlant: (gardenId, plantInstanceId) => dispatch(removePlantFromGarden(gardenId, plantInstanceId))
    }
}


class ConnectableGardenPlantEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(){
    if (!this.props.plantEntry) {
        return null;
    }

    if (this.state.removed) {
      return null;
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
          <button><FontAwesomeIcon icon={faTrash} onClick={this.handleRemoveClick} /></button>
        </div>
      </div>
    )
  }

  handleDetailsClick = () => {
    this.props.history.push({
      pathname: '/plant/' + this.props.plantEntry.trefleId
    });
  }

  handleRemoveClick = () => {
    this.props.removePlant(this.props.gardenId, this.props.plantEntry._id);
    this.setState({removed: true})
    this.forceUpdate();
  }
}

const GardenPlantEntry = connect(null, mapDispatchToProps)(withRouter(ConnectableGardenPlantEntry));
export default GardenPlantEntry;
