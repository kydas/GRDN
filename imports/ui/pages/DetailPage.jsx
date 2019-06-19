import React, { Component } from 'react';


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
      <div>
        <h1>Details for plant</h1>
        <p>
          {JSON.stringify(this.state.entry)}
        </p>
      </div>
    )
  }

}
