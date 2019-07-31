import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faBell, faShower, faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import NotificationsIndicator from './NotificationsIndicator';
import { withRouter } from 'react-router-dom';
import { removePlantFromGarden, addNoteToPlant } from '../actions/GardenActions';
import {connect} from 'react-redux';
import HoverTip from './HoverTip';


const mapDispatchToProps = dispatch => {
    return {
      removePlant: (gardenId, plantInstanceId) => dispatch(removePlantFromGarden(gardenId, plantInstanceId)),
      addNoteToPlant: (gardenId, plantInstanceId, message) => dispatch(addNoteToPlant(gardenId, plantInstanceId, message))
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
        <div className="photo-frame">
          <img src={this.getPictureUrl()} />
        </div>
        <a href={this.getPageUrl()}><h3>{this.props.plantEntry.qty} x {this.props.plantEntry.cachedData.common_name} </h3></a>
        {this.props.plantEntry.plantDate &&
          <p>Planted on {this.props.plantEntry.plantDate.toLocaleDateString("en-US")}</p>
        }
        <div className="plant-entry-controls">
          <button>
            <HoverTip text="Details" />
            <FontAwesomeIcon icon={faSearchPlus} onClick={this.handleDetailsClick} />
          </button>
          <button>
            <HoverTip text="Notifications" />
            <FontAwesomeIcon icon={faBell} />
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
      pathname: '/garden/' + this.props.gardenId + '/' + this.props.plantEntry._id
    });
  }

  handleRemoveClick = () => {
    this.props.removePlant(this.props.gardenId, this.props.plantEntry._id);
    this.setState({removed: true})
    this.forceUpdate();
  }

  getPictureUrl = () => {
      if (this.props.plantEntry.cachedData.images && this.props.plantEntry.cachedData.images.length > 0) {
        return this.props.plantEntry.cachedData.images[0].url;
      }
      return "/media/plant-placeholder-1.jpg";
  }

  getPageUrl = () => {
    return '/garden/' + this.props.gardenId + '/' + this.props.plantEntry._id;
  }

}

const GardenPlantEntry = connect(null, mapDispatchToProps)(withRouter(ConnectableGardenPlantEntry));
export default GardenPlantEntry;
