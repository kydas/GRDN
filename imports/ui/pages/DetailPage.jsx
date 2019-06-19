import React, { Component } from 'react';

export default class DetailPage extends Component {
  render() {
    return (
      <div>
        <h1>Details for plant</h1>
        My id is {this.props.match.params.id}
      </div>
    )
  }

}
