import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Modal from 'react-modal';

import { isOpenModalAction } from '../Actions/ModalActions';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class RegistrationModal extends Component {
  constructor(props) {
    super(props);

    this.onSingInModalOpen = this.onSingInModalOpen.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onSingInModalOpen() {
    this.props.isOpenModalAction(false, !this.props.isOpenSingIn);
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
        <Row className="modal-button">
          <Col
            lg={6} md={6} sm={6} xs={6}
            className="modal-header modal-header-registration"
          >
            Registration
          </Col>
          <Col
            lg={6} md={6} sm={6} xs={6}
            className="modal-header modal-header-sign modal-not-active"
            onClick={this.onSingInModalOpen}
          >
            Sign in
          </Col>
        </Row>

        <div className="modal-content">
          <div className="modal-pack">
            <input placeholder="login" className="modal-input"/>
          </div>

          <div className="modal-pack">
            <input placeholder="mail" className="modal-input"/>
          </div>

          <div className="modal-pack">
            <input placeholder="password" type="password" className="modal-input"/>
          </div>

          <div className="modal-pack">
            <input placeholder="confirm password" type="password" className="modal-input"/>
          </div>
        </div>

        <Row className="modal-button">
          <Col md={6} onClick={this.onCloseModal} className="modal-footer modal-footer-cancel">
            Cancel
          </Col>
          <Col md={6} className="modal-footer modal-footer-okay">
            Registration
          </Col>
        </Row>
      </Modal>
    );
  }
};


function mapStateToProps(state) {
  const {
    isOpenRegistration,
    isOpenSingIn
  } = state.HomeReducers.isOpenModalReducer;

  return { isOpenRegistration, isOpenSingIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenModalAction: (isOpenRegistration, isOpenSingIn) => dispatch(isOpenModalAction(isOpenRegistration, isOpenSingIn))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationModal);