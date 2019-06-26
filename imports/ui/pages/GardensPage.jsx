import React, { Component } from 'react';
import CreateGardenForm from '../components/CreateGardenForm';
import GardenList from '../components/GardenList';

export default class GardensPage extends Component {
  constructor(props) {
    super(props);
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
