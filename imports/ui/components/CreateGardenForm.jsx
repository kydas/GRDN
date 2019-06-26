import React, {Component} from 'react';

export default class CreateGardenForm extends Component {

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
    Meteor.apply('garden.createGarden', [{userId: Meteor.userId()}, {gardenName: this.state.gardenName}], {wait: true}, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  }


}
