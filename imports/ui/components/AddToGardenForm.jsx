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

  }

  render() {
    if (this.props.gardens !== null && this.props.gardens.length > 0) {
      this.state = {
        qty: 1,
        targetGarden: this.props.gardens[0]._id
      }
    } else {
      this.state = {
        qty: 1,
        targetGarden: null
      }
    }

    if (this.props.gardens == null){
      return <LoadingSpinner />
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
        <label> Qty:</label> <input type="number" min="1" max="9999" default="1" onChange={this.handleQtyChange}/>
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
    this.setState({
      qty: event.target.value
    })
  }

  handleGardenChange = (event) => {
    this.setState({
      targetGarden: event.target.value
    })
  }
}

const AddToGardenForm = connect(mapStateToProps, mapDispatchToProps)(ConnectableAddToGardenForm);
export default AddToGardenForm;
