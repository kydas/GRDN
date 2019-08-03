import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNoteToPlant, selectPlant} from '../actions/GardenActions';


const mapDispatchToProps = dispatch => {
  return {
    addNoteToPlant: (gardenId, plantInstanceId, message) => dispatch(addNoteToPlant(gardenId, plantInstanceId, message)),
    selectPlant: (gardenId, plantId) => dispatch(selectPlant(gardenId, plantId))
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
        <textarea className="new-note-form" onChange={this.handleTextChange}></textarea>
        <div className="action-buttons right">
          <button className="teal" onClick={this.handleSubmit}>Add</button>
        </div>
      </div>
    )
  }

  handleTextChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.addNoteToPlant(this.props.gardenId, this.props.plantId, this.state.message);
    this.props.selectPlant(this.props.gardenId, this.props.plantId);
  }
}

const AddNewNoteForm = connect(null, mapDispatchToProps)(ConnectableAddNewNoteForm);
export default AddNewNoteForm;
