import React, { Component } from 'react';
import TestAPI from '../components/testAPI';
import SearchModule from '../components/SearchModule';

export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <div className="background-image-header">
          <img src="/media/benjamin-combs-wuU_SSxDeS0-unsplash-1236.jpg" />
        </div>
        <div className="container dropped">
          <main className="search-page">
            <SearchModule />

          </main>
        </div>
      </div>
    )
  }

}
