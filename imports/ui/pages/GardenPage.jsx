import React, {Component} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import PlantList from '../components/PlantList';
import fetchGardenById from '../actions/GardenActions';
import MapContainer from '../components/MapContainer';

export default class GardenPage extends Component{

  constructor(props) {
    super(props);

    this.state = {
      entry: null
    }

    let that = this;
    Meteor.call("garden.getGardenById", {gardenId: that.props.match.params.id}, (error, result) => {
      this.setState({entry: result});
    });

  }

  render() {
    if (this.state.entry == null) {
      return (
        <LoadingSpinner />
      )
    }
    return (
      <div className="row">
        <h1>Garden: {this.state.entry.name}</h1>
        <div className="col half">
        <PlantList plants={this.state.entry.plants} />
        </div>
        <div className="col half">
        <MapContainer center={{lat: 49.2320521, lng: -122.9832466}} zoom={14.5} />
        </div>
      </div>
    )
  }
}
