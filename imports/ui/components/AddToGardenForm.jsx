import React, {Component} from 'react';

export default class AddToGardenForm extends Component {

  render() {
    return(
      <div className="add-to-garden-form">
        <button>Add to Garden</button>
        <select>
          <option value="My Cool Garden">My Cool Garden</option>
          <option value="My Trash Garden">My Trash Garden</option>
        </select>
        <label> Qty:</label> <input type="number" default="1"/>
      </div>
    )
  }
}
