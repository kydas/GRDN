import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPlantToGarden} from '../actions/GardenActions';

const mapDispatchToProps = (dispatch) => {
  return {
    addPlantToGarden: (gardenId, plantId, qty) => {dispatch(addPlantToGarden(gardenId, plantId, qty))}
  }
}

class ConnectableAddToGardenForm extends Component {



  render() {
    return(
      <div className="add-to-garden-form">
        <button onClick={this.handleSubmit}>Add to Garden</button>
        <select>
          <option value="My Cool Garden">My Cool Garden</option>
          <option value="My Trash Garden">My Trash Garden</option>
        </select>
        <label> Qty:</label> <input type="number" default="1"/>
      </div>
    )
  }

  handleSubmit = () => {
    this.props.addPlantToGarden("ToS4EJL5wxGWhsDhK", "123", 1);
  }
}

const AddToGardenForm = connect(null, mapDispatchToProps)(ConnectableAddToGardenForm);
export default AddToGardenForm;
