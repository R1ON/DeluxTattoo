import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import Modal from 'react-modal';

import { RegistrationAction } from '../Actions/HomeAction';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

import '../Styles/HeaderStyle.sass';

class CreationModal extends Component {
  constructor(props) {
    super(props);

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal() {
    this.props.RegistrationAction(!this.props.isOpen)
  }

  render() {
    const { isOpen } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.onCloseModal}
        className="modal modal-registration"
        ariaHideApp={false}
      >
        <Icon onClick={this.onCloseModal} size="2x" name="close" />
        <p>ХУЯМБО</p>
      </Modal>
    );
  }
};


function mapStateToProps(state) {
  return {
    isOpen: state.homeReducers.RegistrationReducer.isOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    RegistrationAction: (isOpen) => dispatch(RegistrationAction(isOpen))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreationModal);