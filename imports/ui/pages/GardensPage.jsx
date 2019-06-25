import React, { Component } from 'react';

export default class GardensPage extends Component {
  render() {
    Meteor.call('garden.getGardens', {userId: Meteor.userId()}, (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      }

      console.log(res);
    });
    return (
      <div>
        <h1>A List of Your Gardens Goes Below!</h1>
        <button onClick={this.testCreateGarden}> Create me </button>
      </div>
    )
  }

  testCreateGarden() {
    Meteor.apply('garden.createGarden', [{userId: Meteor.userId()}, {gardenName: "doomgarden420"}], {wait: true}, function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }

}
