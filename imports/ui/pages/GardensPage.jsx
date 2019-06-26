import React, { Component } from 'react';
import CreateGardenForm from '../components/CreateGardenForm';

export default class GardensPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gardens: []
    }

    let that = this;
    Meteor.call('garden.getGardens', {userId: Meteor.userId()}, (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      }

      console.log(res);
      that.setState({gardens: res});
    });
  }

  render() {
    if (this.state.gardens.length == 0) {
      return (
        <div>
          <button onClick={this.testCreateGarden}> Create me </button>
        </div>
      )
    }
    return (
      <div>
        <h1>A List of Your Gardens Goes Below!</h1>
        {this.state.gardens.map((el) =>
          <li key={el._id}>{el.name}</li>
        )}
        <CreateGardenForm />
        <button onClick={this.testCreateGarden}> Create me </button>
      </div>
    )
  }

  testCreateGarden = () => {
    Meteor.apply('garden.createGarden', [{userId: Meteor.userId()}, {gardenName: "doomgarden420"}], {wait: true}, function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

}
