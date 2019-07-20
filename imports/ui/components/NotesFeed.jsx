import React, {Component} from 'react';
import NoteEntry from './NoteEntry';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    currentPlant: state.currentPlant
  }
}

class ConnectableNotesFeed extends Component {

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
    if (this.state.notes.length === 0) {
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
    if (this.props.currentPlant != null && this.props.currentPlant.notes != null && this.props.currentPlant.notes.length > 0) {
      if (this.props.currentPlant.notes.length != this.state.notes.length) {
        this.state = {
          notes: this.props.currentPlant.notes.sort((x, y) => y.time - x.time)
        }
      }
    }
  }
}

const NotesFeed = connect(mapStateToProps)(ConnectableNotesFeed);
export default NotesFeed;
