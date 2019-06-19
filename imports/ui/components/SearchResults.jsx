import React, {Component} from 'react';
import ResultModule from './ResultModule';

export default class SearchResults extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    console.log(this.props.results);
    if (!this.props.results || this.props.results.length <= 0) {
      return (
        <div>
          No results
        </div>
      )
    }
    return (
      <div>
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
