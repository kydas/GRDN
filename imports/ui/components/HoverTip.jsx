import React, {Component} from 'react';

/*
  To be inserted inside any link element to create an hover-element with text.
*/
export default class HoverTip extends Component {

  render() {
    return (
      <div className="hover-tip">
        {this.props.text}
      </div>
    );
  }
}
