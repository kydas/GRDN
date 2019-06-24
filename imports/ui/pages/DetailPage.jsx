import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import AddToGardenForm from '../components/AddToGardenForm';
import LoadingSpinner from '../components/LoadingSpinner';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: null
    }
  }

  componentWillMount() {
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
      //return (<p>Loading...</p>)
      return <LoadingSpinner />
    }
    return (

      <div className="detail-page">
        <div className="row">
          <h1>{this.state.entry.common_name}</h1>
          <div className="col half">
            <DataTable entry={this.state.entry} />
          </div>
          <div className="col half">
            <img src="/media/plant-placeholder-1.jpg" />
          </div>
        </div>
        {Meteor.userId() &&
          <div>
            <AddToGardenForm />
          </div>
        }
      </div>
    )
  }
}
