import React, {Component} from 'react';
import LoginForm from './LoginForm';

export default class LoginModal extends Component {


  render(){
    return (
      <div className="modal">
          <LoginForm />
      </div>
    )
  }
}
