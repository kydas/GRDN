import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNoteToPlant} from '../actions/GardenActions';

const mapDispatchToProps = dispatch => {
  return {
    addNoteToPlant: (gardenId, plantInstanceId, message) => dispatch(addNoteToPlant(gardenId, plantInstanceId, message))
  };
};

class ConnectableAddNewNoteForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }
  }

  render () {

    return (
      <div className="add-new-note-form">
        <h3>Add a new note:</h3>
        <textarea onChange={this.handleTextChange}></textarea>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }

  handleTextChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.addNoteToPlant(this.props.gardenId, this.props.plantId, this.state.message)
  }
}

const AddNewNoteForm = connect(null, mapDispatchToProps)(ConnectableAddNewNoteForm);
export default AddNewNoteForm;
