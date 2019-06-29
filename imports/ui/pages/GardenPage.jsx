import React, {Component} from 'react';
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
        <p>Loading</p>
      )
    }
    return (
      <div>
        <h1>Garden: {this.state.entry.name}</h1>
        <p>User: {this.state.entry.userId}</p>
      </div>
    )
  }
}
