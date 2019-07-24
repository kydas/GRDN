import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import LogoutModal from './LogoutModal';
import AddPlantModal from './AddPlantModal';
import {dismissModal} from '../actions/UIActions';
import CreateModal from './CreateModal';
import NotificationsModal from './NotificationsModal';

const mapStateToProps = state => {
    return {
      currentModal: state.currentModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dismissModal: () => (dispatch(dismissModal(null)))
    }
}

class ConnectableModalHolder extends Component {

  registeredModals = {
    LOGIN: () => {return (<LoginModal />)},
    LOGOUT: () => {return (<LogoutModal />)},
    REGISTER: () => {return (<RegisterModal />)},
    CREATE: () => {return (<CreateModal />)},
    ADDPLANT: () => {return (<AddPlantModal />)},
    NOTIFICATIONS: () => {return (<NotificationsModal />)}
  }


  render() {

    return(
      <aside className={"modal-holder " + (this.props.currentModal != null? "active":"inactive")}>
        <div className="modal-background"  onClick={this.dismiss}/>
        {this.props.currentModal != null &&
          this.registeredModals[this.props.currentModal]()
        }
      </aside>
    )
  }

  dismiss = () => {
    this.props.dismissModal();
  }
}

const ModalHolder = connect(mapStateToProps, mapDispatchToProps)(ConnectableModalHolder);
export default ModalHolder;
