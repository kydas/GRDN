import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class ResultModule extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="result-module" onClick={this.toDetailPage}>
        <img src="/media/plant-placeholder-1.jpg" />
        <h2>{this.props.entry.common_name}</h2>
        <p className="scientific-name">{this.props.entry.scientific_name}</p>
        <p className="blurb">A {this.props.entry.main_species.duration} from the {this.props.entry.family_common_name}</p>
      </div>
    )
  }

  toDetailPage = () => {
    this.props.history.push({
      pathname: '/plant/' + this.props.entry.id
    });

  }
}

export default withRouter(ResultModule);
