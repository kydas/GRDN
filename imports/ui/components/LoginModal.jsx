import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById, dismissModal} from '../actions/UIActions';
import {getCurrentUserNotifications, clearCurrentUserNotifications} from "../actions/NotificationsActions";

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => dispatch(summonModalById(id)),
    dismissModal: () => dispatch(dismissModal()),
    getCurrentUserNotifications: () => dispatch(getCurrentUserNotifications())
  }
}

class ConnectableLoginModal extends Component {

  render(){
    return (
      <ModalWrapper name="Log in to GRDN">
        <LoginForm toggle={this.toggleToRegister} getNotifs={this.props.getCurrentUserNotifications} dismiss={this.props.dismissModal} />
      </ModalWrapper>
    )
  }

  toggleToRegister = () => {
    this.props.summonModalById("REGISTER");
  }
}

const LoginModal = connect(null, mapDispatchToProps)(ConnectableLoginModal);
export default LoginModal;
