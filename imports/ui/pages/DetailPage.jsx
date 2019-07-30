import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import AddToGardenForm from '../components/AddToGardenForm';
import LoadingSpinner from '../components/LoadingSpinner';
import {connect} from 'react-redux';
import {summonModalById} from '../actions/UIActions';
import {selectTrefleId} from '../actions/GardenActions';

const mapDispatchToProps = dispatch => {
  return {
    selectTrefleId: (trefleId) => {
      dispatch(selectTrefleId(trefleId));
    },
    summonModalById: (id) => {
      dispatch(summonModalById(id));
    }
  }
}

class ConnectableDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: null
    }

    let that = this;

    Meteor.call("plants.getPlant", {plantId: this.props.match.params.id}, (error, result) => {
        if (error){
            console.log(error);
        } else {
            that.setState({
              entry: result
            });
        }
    })
  }


  render() {
    if (this.state.entry === null) {
      return <LoadingSpinner />
    }
    return (

        <div className="container">
          <main className="detail-page">
            <div className="row">
              <h1>{this.state.entry.common_name}</h1>
              <div className="col half left">
                <DataTable entry={this.state.entry} />
              </div>
              <div className="col half">
                <img src="/media/plant-placeholder-1.jpg" />
              </div>
            </div>
            {Meteor.userId() &&
              <div className="action-buttons">
                <button className="teal" onClick={this.summonAddPlantModal}>Add to Garden</button>
              </div>
            }
          </main>
        </div>


    )
  }

  summonAddPlantModal = () => {
    this.props.selectTrefleId(this.props.match.params.id);
    this.props.summonModalById("ADDPLANT");
  }
}

const DetailPage = connect(null, mapDispatchToProps)(ConnectableDetailPage);
export default DetailPage;
