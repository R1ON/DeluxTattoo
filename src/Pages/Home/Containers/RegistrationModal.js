import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { formValueSelector, reduxForm } from 'redux-form';

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
      //тут прокидываем экш, в экшене вызываем аксиос
      event.preventDefault();
      console.log(
        this.props.inputLogin + " - " +
        this.props.inputMail + " - " +
        this.props.inputPassword + " - " +
        this.props.inputConfirm
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

RegistrationModal = reduxForm({
  form: 'registrationModal'
})(RegistrationModal);

const selector = formValueSelector('registrationModal');

function mapStateToProps(state) {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.HomeReducers.isOpenModalReducer;

  const inputLogin = selector(state, 'inputLoginReg');
  const inputMail = selector(state, 'inputMailReg');
  const inputPassword = selector(state, 'inputPasswordReg');
  const inputConfirm = selector(state, 'inputConfirmReg');

  return { isOpenRegistration, isOpenSignIn, inputLogin, inputMail, inputPassword, inputConfirm };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationModal);