import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import {dismissModal} from '../actions/UIActions';

const mapStateToProps = state => {
    return {
      currentModal: "LOGIN"
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dismissModal: () => (dispatch(dismissModal(null)))
    }
}

class ConnectableModalHolder extends Component {

  registeredModals = {
    LOGIN: () => {return (<LoginModal />)}
  }

  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }

  render() {

    return(
      <aside className={"modal-holder " + (this.state.active? "active":"inactive")} onClick={this.dismiss}>
        {this.props.currentModal != null &&
          this.registeredModals[this.props.currentModal]()
        }
      </aside>
    )
  }

  dismiss = () => {
    this.props.dismissModal();
    this.setState({active:false});
  }
}

const ModalHolder = connect(mapStateToProps, mapDispatchToProps)(ConnectableModalHolder);
export default ModalHolder;
