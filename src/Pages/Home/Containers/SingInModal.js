import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Modal from 'react-modal';

import { isOpenSingInModalAction } from '../Actions/ModalActions';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

class SingInModal extends Component {
  constructor(props) {
    super(props);

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal() {
    this.props.isOpenSingInModalAction(!this.props.isOpenSingIn)
  }

  render() {
    const { isOpenSingIn } = this.props;

    return (
      <Modal
        isOpen={isOpenSingIn}
        onRequestClose={this.onCloseModal}
        className="modal sing-modal"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <Row className="modal-button">
          <Col md={6} className="modal-header modal-header-registration modal-not-active">
            Registration
          </Col>
          <Col md={6} className="modal-header modal-header-sign">
            Sign in
          </Col>
        </Row>

        <div className="modal-content">
          <div className="modal-pack">
            <input placeholder="mail" className="modal-input"/>
          </div>

          <div className="modal-pack">
            <input placeholder="password" type="password" className="modal-input"/>
          </div>
        </div>

        <Row className="modal-button">
          <Col md={6} onClick={this.onCloseModal} className="modal-footer modal-footer-cancel">
            Cancel
          </Col>
          <Col md={6} className="modal-footer modal-footer-okay">
            Sing in
          </Col>
        </Row>
      </Modal>
    );
  }
};


function mapStateToProps(state) {
  return {
    isOpenSingIn: state.HomeReducers.isOpenModalReducer.isOpenSingIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    isOpenSingInModalAction: (isOpenSingIn) => dispatch(isOpenSingInModalAction(isOpenSingIn))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingInModal);