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
          <div className="garden-list-entry">
            {this.props.garden.name}
            <button onClick={this.handleRemove}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <a href={"/garden/" + this.props.garden._id}>
              <FontAwesomeIcon icon={faSearchPlus} />
            </a>
          </div>
        </li>
      )
  }

  handleRemove = () => {
    this.props.remove(this.props.garden._id);
  }

}
