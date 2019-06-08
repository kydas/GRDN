import React, { Component } from 'react';

// A test component to show how url parameters can be included.
// Please delete when we replace this with real content.
// See startup/routes.jsx for usage.

export default class UserPage extends Component {
  render() {
    return (
      <div>
        <h1>User Information Page? WOw!</h1>
        My id is {this.props.match.params.id}
      </div>
    )
  }

}
