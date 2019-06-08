import React, { Component } from 'react';

export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <h1>A Searchable, Filterable Database of Plants, wow!</h1>
        My id is {this.props.match.params.id}
      </div>
    )
  }

}
