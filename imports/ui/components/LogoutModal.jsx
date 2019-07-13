import React, {Component} from 'react';
import LogoutButton from './LogoutButton';

export default class LogoutModal extends Component {


  render(){
    return (
      <div className="modal">
          <LogoutButton />
      </div>
    )
  }
}
