import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById} from '../actions/UIActions';

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => dispatch(summonModalById(id))
  }
}

class ConnectableLoginModal extends Component {

  render(){
    return (
      <ModalWrapper name="Log in to GRDN">
        <LoginForm toggle={this.toggleToRegister}/>
      </ModalWrapper>
    )
  }

  toggleToRegister = () => {
    this.props.summonModalById("REGISTER");
  }
}

const LoginModal = connect(null, mapDispatchToProps)(ConnectableLoginModal);
export default LoginModal;
