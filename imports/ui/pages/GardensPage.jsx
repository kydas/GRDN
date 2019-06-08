import React, { Component } from 'react';

export default class GardensPage extends Component {
  render() {
    return (
      <div>
        <h1>A List of Your Gardens Goes Below!</h1>
        My id is {this.props.match.params.id}
      </div>
    )
  }

}
