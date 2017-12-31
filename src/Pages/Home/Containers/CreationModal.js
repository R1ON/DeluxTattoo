import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import { Row, Col } from 'reactstrap';
import Modal from 'react-modal';

import { RegistrationAction } from '../Actions/HomeAction';

import '../Styles/HeaderStyle.sass';

const overlayBackground = {
  overlay : { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '999' }
};

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
        className="modal"
        style={overlayBackground}
        ariaHideApp={false}
      >
        <Row className="modal-button">
          <Col md={6} className="modal-header modal-header-registration">
            Registration
          </Col>
          <Col md={6} className="modal-header modal-header-sign">
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
          <Col md={6} className="modal-footer modal-footer-cancel">
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