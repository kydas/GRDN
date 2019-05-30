import React, { Component } from 'react';

// A test component to show how url parameters can be included.
// Please delete when we replace this with real content.
// See startup/routes.jsx for usage.

class TestPage2 extends Component {
  render() {
    return (
      <div>
        <h1>I'm a different test Page</h1>
        My id is {this.props.match.params.id}
      </div>
    )
  }

}

export default TestPage2;
