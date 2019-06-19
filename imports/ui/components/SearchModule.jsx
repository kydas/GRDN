import React, {Component} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import TestAPI from './testAPI';

export default class SearchModule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  render() {
    return (
      <div>
        <SearchForm onSearchSubmit={this.onSearchSubmit} />
        <SearchResults results={this.state.results} />
        <TestAPI />
      </div>
    )
  }

  onSearchSubmit = (query) => {
    let that = this;
    Meteor.call("plants.getPlant", query.common_name, (error, result) => {
        if (error){
            console.log(error);
        } else {
            //sucess
            console.log(result);
            that.setState({
              results: result
            });
        }
    })

  }
}
