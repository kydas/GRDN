import React, { Component } from 'react';
import CreateGardenForm from '../components/CreateGardenForm';
import GardenList from '../components/GardenList';
import { withRouter } from 'react-router-dom';



class GardensPage extends Component {
  constructor(props) {
    super(props);

    if (!Meteor.userId()) {
      this.props.history.push({
        pathname: '/login'
      });
    }
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

export default withRouter(GardensPage);
