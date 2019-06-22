import React, { Component } from 'react';
import TestAPI from '../components/testAPI';
import SearchModule from '../components/SearchModule';

export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <h1>A Searchable, Filterable Database of Plants, wow!</h1>
        <SearchModule />

      </div>
    )
  }

}
