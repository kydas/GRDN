import React, {Component} from 'react';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById} from '../actions/UIActions';
import NotificationsScroll  from './NotificationsScroll';

const mapDispatchToProps = dispatch => {
  return {
    summonModalById: (id) => dispatch(summonModalById(id))
  }
}

class ConnectableNotificationsModal extends Component {

  render(){
    return (
      <ModalWrapper name="Notifications">
        <NotificationsScroll />
      </ModalWrapper>
    )
  }

}

const NotificationsModal = connect(null, mapDispatchToProps)(ConnectableNotificationsModal);
export default NotificationsModal;
