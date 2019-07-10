import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import AddToGardenForm from '../components/AddToGardenForm';
import LoadingSpinner from '../components/LoadingSpinner';
import NotesFeed from '../components/NotesFeed';
import AddNewNoteForm from '../components/AddNewNoteForm';

export default class GardenPlantDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garden: null,
      entry: null,
      error: false
    }

    const gardenId = this.props.match.params.id;
    const plantInstanceId = this.props.match.params.plantId;

    let that = this;

    Meteor.call("garden.getGardenById", {gardenId: gardenId}, (error, result) => {
        if (error){
            console.log(error);
            that.setState({
              garden: null,
              entry: null,
              error: true
            })
        } else {
            let plant = result.plants.find(x => x._id == plantInstanceId);
            if (plant == null) {
              that.setState({
                garden: result,
                entry: null,
                error: true
              })
            }
            that.setState({
              garden: result,
              entry: plant,
              error: false
            });
        }
    })
  }


  render() {
    if (this.state.entry === null && this.state.error === false) {
      return <LoadingSpinner />
    }

    if (this.state.entry === null && this.state.error === true) {
        return "ERROR";
    }

    return (

      <div className="detail-page">
        <div className="row">
          <h1>{this.state.entry.qty} x {this.state.entry.cachedData.common_name} in {this.state.garden.name}</h1>
          <div className="col half">
            <DataTable entry={this.state.entry.cachedData} />

          </div>
          <div className="col half">
            <AddNewNoteForm plantId={this.state.entry._id} gardenId={this.state.garden._id}/>
            <NotesFeed notes={this.state.entry.notes} />
          </div>
        </div>
      </div>
    )
  }
}
