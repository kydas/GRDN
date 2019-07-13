import React, {Component} from 'react';

export default class ModalWrapper extends Component {

  render() {
    return (
      <div className="modal">
        <div className="modal-header">
          <h3>{this.props.name}</h3>
        </div>
        <div className="modal-body">
          {this.props.children}
        </div>
      </div>
    )
  }

}
