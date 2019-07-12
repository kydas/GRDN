import React, {Component} from 'react';
import NoteEntry from './NoteEntry';

export default class NotesFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.updateNotes();

  }

  componentDidUpdate(){
    this.updateNotes();

  }

  render() {
    if (this.state.notes == null) {
      return (
        <p>No notes found. Add one?</p>
      )
    }


    return (
      <div>
        <h3>Notes feed:</h3>
        <ul>
          {this.state.notes.map((el) =>
            <NoteEntry note={el} key={el._id} />
          )}
        </ul>
      </div>
    )
  }

  updateNotes(){
    if (this.props.notes.length != this.state.notes.length) {
      if (typeof(this.props.notes) !== "undefined" & this.props.notes !== null & this.props.notes.length !== 0) {
        this.state = {
          notes: this.props.notes.sort((x, y) => y.time - x.time)
        }
      }
    }
  }
}
