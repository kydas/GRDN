import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPlantToGarden, fetchUserGardens} from '../actions/GardenActions';
import {dismissModal, clearMessage} from '../actions/UIActions';
import LoadingSpinner from './LoadingSpinner';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const mapDispatchToProps = dispatch => {
  return {
    addPlantToGarden: (gardenId, plantId, qty, plantDate) => {dispatch(addPlantToGarden(gardenId, plantId, qty, plantDate))},
    fetchUserGardens: (userId) => {dispatch(fetchUserGardens(userId))},
    dismissModal: () => {dispatch(dismissModal())},
    clearMessage: (messageId) => {dispatch(clearMessage(messageId))}
  }
}

const mapStateToProps = (state) => {
  return {
    gardens: state.gardens,
    addToGardenSuccess: state.addToGardenSuccess,
    addToGardenError: state.addToGardenError,
    currentTrefleId: state.currentTrefleId
  }
}

class ConnectableAddToGardenForm extends Component {

  constructor(props) {
    super(props);

    this.props.fetchUserGardens(Meteor.userId());
    this.state = {
      qty: 1,
      targetGarden: "",
      plantDate: new Date(),
      validationError: null

    }
  }

  componentDidUpdate(){
    if (this.props.gardens !== null && this.props.gardens.length > 0 && this.state.targetGarden === null) {
      this.setState({
        targetGarden: this.props.gardens[0]._id
      })
    }
  }

  render() {

    console.log(this.props.addToGardenSuccess);
    if (this.props.gardens == null){
      return <LoadingSpinner />
    }

    if (this.props.gardens.length == 0) {
      return (
        <div className="add-to-garden-form">
          No gardens found. <a href="/">Create one</a> to get started!
        </div>
      )
    }

    return(
      <form className="add-to-garden-form">
        {this.props.addToGardenError &&
          <p className="error-message">{this.props.addToGardenError.reason}</p>
        }
        {this.state.validationError &&
          <p className="error-message">{this.state.validationError.reason}</p>
        }
        <label>Garden</label>
        <select value={this.state.targetGarden} onChange={this.handleGardenChange}>
          <option key="" value="">Select a Garden</option>
          {this.props.gardens.map((el) =>
            <option key={el._id} value={el._id}>
                {el.name}
            </option>
          )}
        </select>
        <div className="col third left">
          <label> Qty:</label>
          <input type="number" min="1" value={this.state.qty} onChange={this.handleQtyChange} />
        </div>
        <div className="col two-third">
          <label> Plant Date:</label>
          <DatePicker selected={this.state.plantDate} onChange={this.handleDateChange} />
        </div>
        <div className="action-buttons right">
          <button className="teal" onClick={this.handleSubmit}>Add to Garden</button>
        </div>
      </form>
    )
  }

  componentWillUnmount() {
    this.props.clearMessage("addToGardenError");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.targetGarden === "") {
      this.setState ({
          addToGardenError: {
          reason: "Please choose a garden!"
        }})
    } else {
      this.props.addPlantToGarden(this.state.targetGarden, this.props.currentTrefleId, parseInt(this.state.qty), this.state.plantDate);
      this.props.dismissModal();
    }
  }

  handleQtyChange = (event) => {
    this.setState({
      qty: event.target.value
    })
  }

  handleGardenChange = (event) => {
    this.setState({
      targetGarden: event.target.value
    })
  }

  handleDateChange = (date) => {
    this.setState({
      plantDate: date
    })
  }
}

const AddToGardenForm = connect(mapStateToProps, mapDispatchToProps)(ConnectableAddToGardenForm);
export default AddToGardenForm;
