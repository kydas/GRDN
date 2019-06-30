import React, {Component} from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import PlantList from '../components/PlantList';
import fetchGardenById from '../actions/GardenActions';


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
      <div>
        <h1>Garden: {this.state.entry.name}</h1>
        <p>User: {this.state.entry.userId}</p>
        <PlantList plants={this.state.entry.plants} />
      </div>
    )
  }
}
