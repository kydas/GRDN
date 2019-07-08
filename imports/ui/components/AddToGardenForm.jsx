import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPlantToGarden, fetchUserGardens} from '../actions/GardenActions';
import LoadingSpinner from './LoadingSpinner';

const mapDispatchToProps = dispatch => {
  return {
    addPlantToGarden: (gardenId, plantId, qty) => {dispatch(addPlantToGarden(gardenId, plantId, qty))},
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
      targetGarden: null

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
    this.props.addPlantToGarden(this.state.targetGarden, this.props.plantId, parseInt(this.state.qty));
  }

  handleQtyChange = (event) => {
    console.log(event.target.value);
    this.setState({
      qty: event.target.value
    })
    console.log(this.state.qty);
  }

  handleGardenChange = (event) => {
    this.setState({
      targetGarden: event.target.value
    })
  }
}

const AddToGardenForm = connect(mapStateToProps, mapDispatchToProps)(ConnectableAddToGardenForm);
export default AddToGardenForm;
