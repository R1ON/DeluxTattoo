import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Form, Field } from 'redux-form';

import '../../Styles/HeaderStyle.sass'

const RegistrationForm = ({ onSubmit, onCloseModal, onSignInModalOpen }) => (
  <Form onSubmit={onSubmit}>
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
        onClick={onSignInModalOpen}
      >
        Sign in
      </Col>
    </Row>

    <div className="modal-content">
      <div className="modal-pack">
        <Field name="inputLoginReg" component="input" type="input" placeholder="login" className="modal-input" />
      </div>

      <div className="modal-pack">
        <Field name="inputMailReg" component="input" type="input" placeholder="mail" className="modal-input" />
      </div>

      <div className="modal-pack">
        <Field name="inputPasswordReg" component="input" type="password" placeholder="password" className="modal-input" />
      </div>

      <div className="modal-pack">
        <Field name="inputConfirmReg" component="input" type="password" placeholder="confirm password" className="modal-input" />
      </div>
    </div>

    <Row className="modal-button">
      <Col md={6} onClick={onCloseModal} className="modal-footer modal-footer-cancel">
        Cancel
      </Col>
      <Col md={6} className="modal-footer modal-footer-okay">
        <button className="modal-footer-submit" type="submit">Registration</button>
      </Col>
    </Row>
  </Form>
);

export default RegistrationForm;