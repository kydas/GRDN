import React, {Component} from 'react';
import {createGarden} from '../actions/GardenActions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      createGarden: (userId, gardenName, location) => dispatch(createGarden(userId, gardenName, location))
    }
}

class ConnectableCreateGardenForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gardenName: "",
      lat: 0,
      lng: 0
    }

  }

  render() {
    return (
      <form className="gardenForm">
        Name: <input type="text" onChange={this.handleGardenNameChange} />
        Lat: <input type="text" onChange={this.handleLatChange} />
        Lng: <input type="text" onChange={this.handleLngChange} />
        <button onClick={this.handleCreate}>Create!</button>
      </form>
    )
  }

  handleGardenNameChange = (event) => {
    this.setState({
      gardenName: event.target.value
    })
  }

  handleLatChange = (event) => {
    this.setState({
      lat: event.target.value
    })
  }

  handleLngChange = (event) => {
    this.setState({
      lng: event.target.value
    })
  }

  handleCreate = (event) => {
    event.preventDefault();
    console.log(this.state);
    let location = {
      lat: this.state.lat,
      lng: this.state.lng
    }
    this.props.createGarden(Meteor.userId(), this.state.gardenName, location);
  }


}

const CreateGardenForm = connect(null, mapDispatchToProps)(ConnectableCreateGardenForm);
export default CreateGardenForm;
