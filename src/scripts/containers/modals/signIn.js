import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { formValueSelector } from 'redux-form';

import { isOpenModal } from '../../actions/modalActions';
import { submitSignIn } from '../../actions/submitActions';

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

    this.onRegistrationModalOpening = this.onRegistrationModalOpening.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onRegistrationModalOpening() {
    const { isOpenRegistration } = this.props;

    this.props.isOpenModal(!isOpenRegistration, false);
  }

  onCloseModal() {
    const { isOpenSignIn } = this.props;

    this.props.isOpenModal(false, !isOpenSignIn);
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
          submit={this.handleSubmit}
          closeModal={this.onCloseModal}
          openRegistrationModal={this.onRegistrationModalOpening}
        />
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  isOpenRegistration: PropTypes.bool.isRequired,
  isOpenSignIn: PropTypes.bool.isRequired
};

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
  isOpenModal: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModal(isOpenRegistration, isOpenSignIn)),
  submitSignIn: query => dispatch(submitSignIn(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
