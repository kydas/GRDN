import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserGardens, deleteGardenById} from '../actions/GardenActions';
import GardenListEntry from './GardenListEntry';
import LoadingSpinner from './LoadingSpinner';

const mapDispatchToProps = dispatch => {
  return {
    removeGarden: (gardenId) => dispatch(deleteGardenById(gardenId)),
    fetchUserGardens: (userId) => dispatch(fetchUserGardens(userId))
  };
};

const mapStateToProps = state => {
  return {
    gardens: state.gardens,
    loading: state.loading,
    error: state.error
  };
};

class ConnectableGardenList extends Component {

  constructor(props) {
    super(props);

    this.props.fetchUserGardens(Meteor.userId());

  }

  render() {

    if (this.props.error !== null) {
      return error;
    }

    if (this.props.loading === true || this.props.gardens === null) {
      return <LoadingSpinner />
    }

    if (this.props.gardens.length === 0) {
      return (
        <p>Looks like you don't have any gardens yet! Click on the button below to create one.</p>
      )
    }

    return (
      <div>
        <ul>
          {this.props.gardens.map((el) =>
            <GardenListEntry garden={el} remove={this.handleRemove} key={el._id}/>
          )}
        </ul>

      </div>
    )

  }

  handleRemove = (gardenId) => {
    this.props.removeGarden(gardenId);
  }
}


const GardenList = connect(mapStateToProps, mapDispatchToProps)(ConnectableGardenList);
export default GardenList;
