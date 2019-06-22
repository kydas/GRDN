import React, { Component } from 'react';
import DataTable from '../components/DataTable';

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
            //sucess
            that.setState({
              entry: result
            });
        }
    })
  }

  render() {
    if (this.state.entry === null) {
      return (
        <p>Loading...</p>
      )
    }
    console.log(this.state.entry);
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
        <p>
        </p>
      </div>
    )
  }

}
