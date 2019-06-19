import React, {Component} from 'react';

export default class ResultModule extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.toDetailPage}>
        <h2>{this.props.entry.common_name}</h2>
        <p className="scientific-name">{this.props.entry.scientific_name}</p>
        <p className="blurb">A {this.props.entry.main_species.duration} from the {this.props.entry.family_common_name}</p>
      </div>
    )
  }

  toDetailPage = () => {
    console.log(this.props.entry.id);
    
  }
}
