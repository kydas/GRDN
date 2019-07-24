import React, {Component} from 'react';

export default class NoteEntry extends Component {

  render () {
    if (this.props.note === null) {
      return "error"
    }
    return (
      <li>
        <p>{this.props.note.message}</p>
        <p className="date">on {this.props.note.time.toLocaleDateString("en-US")}</p>
      </li>
    )
  }
}
