import React, {Component} from 'react';
import CreateGardenForm from './CreateGardenForm';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById, dismissModal} from '../actions/UIActions';

const mapDispatchToProps = dispatch => {
  return {
    dismissModal: () => dispatch(dismissModal())
  }
}


class ConnectableCreateModal extends Component {

  render(){
    return (
      <ModalWrapper name="Create Garden">
        <div className="action-buttons centered">
          <CreateGardenForm dismiss={this.props.dismissModal}/>
        </div>
      </ModalWrapper>
    )
  }

}

const CreateModal = connect(null, mapDispatchToProps)(ConnectableCreateModal);
export default CreateModal;
