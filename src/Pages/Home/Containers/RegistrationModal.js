import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { formValueSelector } from 'redux-form';

import { isOpenModalAction } from '../Actions/ModalActions';

import RegistrationForm from '../Components/Forms/RegistrationForm';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class RegistrationModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = (event) => {
      //тут прокидываем экшн, в экшене вызываем аксиос
      // event.preventDefault();
      console.log(
        this.props.inputLoginReg + " - " +
        this.props.inputMailReg + " - " +
        this.props.inputPasswordReg + " - " +
        this.props.inputConfirmReg
      )
    };

    this.onSignInModalOpen = this.onSignInModalOpen.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onSignInModalOpen() {
    this.props.isOpenModalAction(false, !this.props.isOpenSignIn);
  }

  onCloseModal() {
    this.props.isOpenModalAction(!this.props.isOpenRegistration, false);
  }

  render() {
    const { isOpenRegistration } = this.props;

    return (
      <Modal
        isOpen={isOpenRegistration}
        onRequestClose={this.onCloseModal}
        className="modal"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <RegistrationForm
          onSubmit={this.handleSubmit}
          onCloseModal={this.onCloseModal}
          onSignInModalOpen={this.onSignInModalOpen}
        />
      </Modal>
    );
  }
};

const selector = formValueSelector('registrationModal');

function mapStateToProps(state) {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.HomeReducers.isOpenModalReducer;

  const inputLoginReg = selector(state, 'inputLoginReg');
  const inputMailReg = selector(state, 'inputMailReg');
  const inputPasswordReg = selector(state, 'inputPasswordReg');
  const inputConfirmReg = selector(state, 'inputConfirmReg');

  return { isOpenRegistration, isOpenSignIn, inputLoginReg, inputMailReg, inputPasswordReg, inputConfirmReg };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationModal);