import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Form, Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import validate from '../../validation/registrationForm';

const RegistrationForm = ({ submit, closeModal, openSignInModal }) => (
  <Form onSubmit={submit}>
    <Row className="modal-button">
      <Col
        lg={6}
        md={6}
        sm={6}
        xs={6}
        className="modal-header modal-header-registration"
      >
        Registration
      </Col>
      <Col
        lg={6}
        md={6}
        sm={6}
        xs={6}
        className="modal-header modal-header-sign modal-not-active"
        onClick={openSignInModal}
      >
        Sign in
      </Col>
    </Row>

    <div className="modal-content">
      <div className="modal-pack">
        <Field name="inputLoginReg" component={RenderField} type="input" placeholder="login" />
      </div>

      <div className="modal-pack">
        <Field name="inputMailReg" component={RenderField} type="input" placeholder="mail" />
      </div>

      <div className="modal-pack">
        <Field name="inputPasswordReg" component={RenderField} type="password" placeholder="password" />
      </div>

      <div className="modal-pack">
        <Field name="inputConfirmReg" component={RenderField} type="password" placeholder="confirm password" />
      </div>
    </div>

    <Row className="modal-button">
      <Col md={6} onClick={closeModal} className="modal-footer modal-footer-cancel">
        Cancel
      </Col>
      <Col md={6} className="modal-footer modal-footer-okay">
        <button className="modal-footer-submit" type="submit">Registration</button>
      </Col>
    </Row>
  </Form>
);

RegistrationForm.propTypes = {
  submit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  openSignInModal: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'registrationModal', validate
})(RegistrationForm);
