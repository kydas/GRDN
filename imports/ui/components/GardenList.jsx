import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserGardens} from '../actions/GardenActions';


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

    this.props.dispatch(fetchUserGardens(Meteor.userId()));

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
          <li key={el._id}>{el.name}</li>
        )}
      </ul>
    )

  }
}


const GardenList = connect(mapStateToProps)(ConnectableGardenList);
export default GardenList;
