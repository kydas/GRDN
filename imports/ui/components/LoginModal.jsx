import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById, dismissModal} from '../actions/UIActions';

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => dispatch(summonModalById(id)),
    dismissModal: () => dispatch(dismissModal())
  }
}

class ConnectableLoginModal extends Component {

  render(){
    return (
      <ModalWrapper name="Log in to GRDN">
        <LoginForm toggle={this.toggleToRegister} dismiss={this.props.dismissModal} />
      </ModalWrapper>
    )
  }

  toggleToRegister = () => {
    this.props.summonModalById("REGISTER");
  }
}

const LoginModal = connect(null, mapDispatchToProps)(ConnectableLoginModal);
export default LoginModal;
