import React, {Component} from 'react';
import LogoutButton from './LogoutButton';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById} from '../actions/UIActions';

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => dispatch(summonModalById(id))
  }
}

class ConnectableLogoutModal extends Component {

  render(){
    return (
      <ModalWrapper name="Logout">
        Logging out? Click on the button below.
        <div className="action-buttons centered">
          <LogoutButton />
        </div>
      </ModalWrapper>
    )
  }

  toggleToRegister = () => {
    this.props.summonModalById("REGISTER");
  }
}

const LogoutModal = connect(null, mapDispatchToProps)(ConnectableLogoutModal);
export default LogoutModal;
