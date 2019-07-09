import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPlantToGarden, fetchUserGardens} from '../actions/GardenActions';
import LoadingSpinner from './LoadingSpinner';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const mapDispatchToProps = dispatch => {
  return {
    addPlantToGarden: (gardenId, plantId, qty, plantDate) => {dispatch(addPlantToGarden(gardenId, plantId, qty, plantDate))},
    fetchUserGardens: (userId) => {dispatch(fetchUserGardens(userId))}
  }
}

const mapStateToProps = (state) => {
  return {
    gardens: state.gardens,
    addToGardenSuccess: state.addToGardenSuccess,
    addToGardenError: state.addToGardenError
  }
}

class ConnectableAddToGardenForm extends Component {

  constructor(props) {
    super(props);

    this.props.fetchUserGardens(Meteor.userId());
    this.state = {
      qty: 1,
      targetGarden: null,
      plantDate: new Date()

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
      <div className="add-to-garden-form">

        <button onClick={this.handleSubmit}>Add to Garden</button>

        <select onChange={this.handleGardenChange}>
          {this.props.gardens.map((el) =>
            <option key={el._id} value={el._id}>
                {el.name}
            </option>
          )}
        </select>
        <label> Qty:</label> <input type="number" default={this.state.qty} onChange={this.handleQtyChange} />
        <label> Plant Date:</label> <DatePicker selected={this.state.plantDate} onChange={this.handleDateChange} />
        {this.props.addToGardenSuccess &&
          <span className="success-message">Success!</span>
        }
        {this.props.addToGardenError &&
          <span className="error-message">{this.props.addToGardenError.reason}</span>
        }
      </div>
    )
  }

  handleSubmit = () => {
    console.log(this.state.plantDate);
    this.props.addPlantToGarden(this.state.targetGarden, this.props.plantId, parseInt(this.state.qty), this.state.plantDate);
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
