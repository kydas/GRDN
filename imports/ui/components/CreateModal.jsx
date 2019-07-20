import React, {Component} from 'react';
import CreateGardenForm from './CreateGardenForm';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById} from '../actions/UIActions';



class ConnectableCreateModal extends Component {

  render(){
    return (
      <ModalWrapper name="Create Garden">
        <div className="action-buttons centered">
          <CreateGardenForm />
        </div>
      </ModalWrapper>
    )
  }

}

const CreateModal = connect(null, null)(ConnectableCreateModal);
export default CreateModal;
