import React, {Component} from 'react';

export default class HoverTip extends Component {

  render() {
    return (
      <div className="hover-tip">
        {this.props.text}
      </div>
    );
  }
}
