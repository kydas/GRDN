import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import {dismissModal} from '../actions/UIActions';

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
    LOGOUT: () => {return (<LogoutModal />)}
  }


  render() {

    return(
      <aside className={"modal-holder " + (this.props.currentModal != null? "active":"inactive")} onClick={this.dismiss}>
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
