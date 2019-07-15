import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class ResultModule extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="result-module" onClick={this.toDetailPage}>
        <img src="/media/plant-placeholder-1.jpg" />
        <h2>{this.props.entry.common_name}</h2>
        <p className="scientific-name">{this.props.entry.scientific_name}</p>

      </li>
    )
  }

  toDetailPage = () => {
    this.props.history.push({
      pathname: '/plant/' + this.props.entry.id
    });

  }
}

export default withRouter(ResultModule);
