import React, {Component} from 'react';
import connect from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

export default class GardenListEntry extends Component{

  constructor(props) {
    super(props);
  }


  render() {

      return (
        <li key={this.props.garden._id} >
          <a className="garden-list-entry" href={"/garden/" + this.props.garden._id}>
            {this.props.garden.name}
            <button onClick={this.handleRemove}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button onClick={this.handleRemove}>
              <FontAwesomeIcon icon={faSearchPlus} />
            </button>
          </a>
        </li>
      )
  }

  handleRemove = () => {
    this.props.remove(this.props.garden._id);
  }

}
