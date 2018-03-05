import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { formValueSelector } from 'redux-form';

import { isOpenModal } from '../../actions/modalActions';
import { submitRegistration } from '../../actions/submitActions';

import RegistrationForm from '../../components/modals/Registration';

import '../../../styles/common/modals.sass';

const overlayBackground = {
  overlay: {
  	backgroundColor: 'rgba(0, 0, 0, 0.8)',
	  zIndex: '999'
  }
};

class RegistrationModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = () => {
      const { inputLoginReg, inputMailReg, inputPasswordReg } = this.props;
	    const query = { inputLoginReg, inputMailReg, inputPasswordReg };

      this.props.submitRegistration(query);
    };

    this.onSignInModalOpening = this.onSignInModalOpening.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onSignInModalOpening() {
    const { isOpenSignIn } = this.props;

    this.props.isOpenModal(false, !isOpenSignIn);
  }

  onCloseModal() {
    const { isOpenRegistration } = this.props;

    this.props.isOpenModal(!isOpenRegistration, false);
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
          submit={this.handleSubmit}
          closeModal={this.onCloseModal}
          openSignInModal={this.onSignInModalOpening}
        />
      </Modal>
    );
  }
}

RegistrationModal.propTypes = {
  isOpenRegistration: PropTypes.bool.isRequired,
  isOpenSignIn: PropTypes.bool.isRequired
};

const selector = formValueSelector('registrationModal');

const mapStateToProps = (state) => {
  const { isOpenRegistration, isOpenSignIn } = state.modalReducers.isOpenModalReducer;

  const inputLoginReg = selector(state, 'inputLoginReg');
  const inputMailReg = selector(state, 'inputMailReg');
  const inputPasswordReg = selector(state, 'inputPasswordReg');
  const inputConfirmReg = selector(state, 'inputConfirmReg');

  return {
    isOpenRegistration, isOpenSignIn, inputLoginReg, inputMailReg, inputPasswordReg, inputConfirmReg
  };
};

const mapDispatchToProps = dispatch => ({
  isOpenModal: (isOpenRegistration, isOpenSignIn) => dispatch(isOpenModal(isOpenRegistration, isOpenSignIn)),
  submitRegistration: query => dispatch(submitRegistration(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationModal);
