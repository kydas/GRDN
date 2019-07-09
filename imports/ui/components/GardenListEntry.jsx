import React, {Component} from 'react';
import connect from 'react-redux';

export default class GardenListEntry extends Component{

  constructor(props) {
    super(props);
  }


  render() {

      return (
        <li key={this.props.garden._id} >
          <a href={"/garden/" + this.props.garden._id}>
            {this.props.garden.name}
          </a>
          <button onClick={this.handleRemove}>x</button>
        </li>
      )
  }

  handleRemove = () => {
    this.props.remove(this.props.garden._id);
  }

}
