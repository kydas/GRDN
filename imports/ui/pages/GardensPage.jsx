import React, { Component } from 'react';
import CreateGardenForm from '../components/CreateGardenForm';
import GardenList from '../components/GardenList';

export default class GardensPage extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      gardens: []
    }

    let that = this;
    Meteor.call('garden.getUserGardens', {userId: Meteor.userId()}, (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      }

      console.log(res);
      that.setState({gardens: res});
    });*/
  }

  render() {
    return (
      <div>
        <h1>A List of Your Gardens Goes Below!</h1>
        <GardenList />

          <CreateGardenForm />
      </div>
    )
  }

}
