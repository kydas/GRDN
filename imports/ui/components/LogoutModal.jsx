import React, {Component} from 'react';
import LogoutButton from './LogoutButton';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById} from '../actions/UIActions';



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

}

const LogoutModal = connect(null, null)(ConnectableLogoutModal);
export default LogoutModal;
