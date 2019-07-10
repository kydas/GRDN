import React, {Component} from 'react';
import NoteEntry from './NoteEntry';

export default class NotesFeed extends Component {

  render() {
    if (this.props.notes === null || this.props.notes.length === 0) {
      return (
        <p>No notes found. Add one?</p>
      )
    }
    return (
      <div>
        <h3>Notes feed:</h3>
        <ul>
          {this.props.notes.map((el) =>
            <NoteEntry note={el} key={el._id} />
          )}
        </ul>
      </div>
    )
  }
}
