import React, { Component } from 'react';
import CreateGardenForm from '../components/CreateGardenForm';
import GardenList from '../components/GardenList';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {summonModalById} from '../actions/UIActions';

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => {
      dispatch(summonModalById(id));
    }
  }
}

class ConnectableGardensPage extends Component {
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
      <div className="container">
        <main className="gardens-page">
          <h1>Your Gardens:</h1>
          <GardenList />
          <div className="action-buttons">
            <button onClick={this.summonCreateGardenModal} className="teal">New Garden</button>
          </div>
        </main>
      </div>
    )
  }

  summonCreateGardenModal = () => {
    this.props.summonModalById("CREATE");
    console.log("t");  //TODO required?
  }

}

const GardensPage = connect(null, mapDispatchToProps)(withRouter(ConnectableGardensPage));
export default GardensPage;
