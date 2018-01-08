import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { formValueSelector, reduxForm } from 'redux-form';

import { isOpenModalAction } from '../Actions/ModalActions';

import SignInForm from '../Components/Forms/SignInForm';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class SignInModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = (event) => {
      //тут прокидываем экш, в экшене вызываем аксиос
      event.preventDefault();
      console.log(this.props.inputMail + " - " + this.props.inputPassword)
    };

    this.onRegistrationModalOpen = this.onRegistrationModalOpen.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onRegistrationModalOpen() {
    this.props.isOpenModalAction(!this.props.isOpenRegistration, false)
  }

  onCloseModal() {
    this.props.isOpenModalAction(false, !this.props.isOpenSignIn);
  }

  render() {
    const { isOpenSignIn } = this.props;

    return (
      <Modal
        isOpen={isOpenSignIn}
        onRequestClose={this.onCloseModal}
        className="modal sign-modal"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <SignInForm
          onSubmit={this.handleSubmit}
          onCloseModal={this.onCloseModal}
          onRegistrationModalOpen={this.onRegistrationModalOpen}
        />
      </Modal>
    );
  }
};

SignInModal = reduxForm({
  form: 'signInModal'
})(SignInModal);

const selector = formValueSelector('signInModal');

function mapStateToProps(state) {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.HomeReducers.isOpenModalReducer;

  const inputMail = selector(state, 'inputMailSign');
  const inputPassword = selector(state, 'inputPasswordSign');

  return { isOpenRegistration, isOpenSignIn, inputMail, inputPassword };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
