import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserGardens, deleteGardenById} from '../actions/GardenActions';
import GardenListEntry from './GardenListEntry';

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
      return "Loading";
    }

    return (
      <ul>
        {this.props.gardens.map((el) =>
          <GardenListEntry garden={el} remove={this.handleRemove} key={el._id}/>
        )}
      </ul>
    )

  }

  handleRemove = (gardenId) => {
    this.props.removeGarden(gardenId);
  }
}


const GardenList = connect(mapStateToProps, mapDispatchToProps)(ConnectableGardenList);
export default GardenList;
