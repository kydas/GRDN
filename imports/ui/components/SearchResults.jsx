import React, {Component} from 'react';
import ResultModule from './ResultModule';

export default class SearchResults extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    if (!this.props.results || this.props.results.length <= 0) {
      return (
        <div className="search-results">
          No results
        </div>
      )
    }
    return (
      <div className="search-results">
        {this.props.results.length === 1 &&
          <p>Showing 1 result:</p>
        }
        {this.props.results.length !== 1 &&
          <p>Showing {this.props.results.length} results:</p>
        }
        <ul>
        {this.props.results.map((el) =>
          <ResultModule entry={el} key={el.id} />
        )}
        </ul>
      </div>
    )

  }
}
