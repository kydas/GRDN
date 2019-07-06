import React, {Component} from 'react';
import {createGarden} from '../actions/GardenActions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      createGarden: (userId, gardenName) => dispatch(createGarden(userId, gardenName))
    }
}

class ConnectableCreateGardenForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gardenName: ""
    }

  }

  render() {
    return (
      <form className="gardenForm">
        <input type="text" onChange={this.handleGardenNameChange} />
        <button onClick={this.handleCreate}>Create!</button>
      </form>
    )
  }

  handleGardenNameChange = (event) => {
    this.setState({
      gardenName: event.target.value
    })
  }

  handleCreate = (event) => {
    event.preventDefault();
    this.props.createGarden(Meteor.userId(), this.state.gardenName);
  }


}

const CreateGardenForm = connect(null, mapDispatchToProps)(ConnectableCreateGardenForm);
export default CreateGardenForm;
