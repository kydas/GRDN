import React, {Component} from 'react';
import CreateGardenForm from './CreateGardenForm';
import {connect} from 'react-redux';
import ModalWrapper from './ModalWrapper';
import {summonModalById} from '../actions/UIActions';
import AddToGardenForm from './AddToGardenForm';



class ConnectableAddPlantModal extends Component {

  render(){
    return (
      <ModalWrapper name="Add Plant to Garden">
        <div className="action-buttons centered">
          <AddToGardenForm />
        </div>
      </ModalWrapper>
    )
  }

}

const AddPlantModal = connect(null, null)(ConnectableAddPlantModal);
export default AddPlantModal;
