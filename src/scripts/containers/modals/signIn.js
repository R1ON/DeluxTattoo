import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { formValueSelector } from 'redux-form';

import { isOpenModalAction } from '../../actions/modalActions';
import { submitSignIn } from '../../actions/submitSignIn';

import SignInForm from '../../components/modals/SignIn';

import '../../../styles/common/modals.sass';

const overlayBackground = {
  overlay: {
  	backgroundColor: 'rgba(0, 0, 0, 0.8)',
	  zIndex: '999'
  }
};

class SignInModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = (event) => {
      const { inputMailSign, inputPasswordSign } = this.props;
      const query = { inputMailSign, inputPasswordSign };

      event.preventDefault();
      this.props.submitSignIn(query);
    };

    this.onRegistrationModalOpen = this.onRegistrationModalOpen.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onRegistrationModalOpen() {
    this.props.isOpenModalAction(!this.props.isOpenRegistration, false);
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
}

const selector = formValueSelector('signInModal');

function mapStateToProps(state) {
  const {
    isOpenRegistration,
    isOpenSignIn
  } = state.modalReducers.isOpenModalReducer;

  const { successSignIn } = state.modalReducers.submitSignInReducer;

  const inputMailSign = selector(state, 'inputMailSign');
  const inputPasswordSign = selector(state, 'inputPasswordSign');

  return {
  	isOpenRegistration, isOpenSignIn, inputMailSign, inputPasswordSign, successSignIn
  };
}

const mapDispatchToProps = dispatch => ({
  isOpenModalAction: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSignIn)),
  submitSignIn: query => dispatch(submitSignIn(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
