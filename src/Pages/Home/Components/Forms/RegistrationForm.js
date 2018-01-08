import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Form, Field, reduxForm } from 'redux-form';

import '../../Styles/HeaderStyle.sass'

const validate = (value) => {
  const error = {};

  if (!value.inputLoginReg) {
    error.inputLoginReg = 'Required';
  } else if (value.inputLoginReg.length > 40) {
    error.inputLoginReg = 'Must be 40 characters or less';
  }

  if (!value.inputMailReg) {
    error.inputMailReg = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.inputMailReg)) {
    error.inputMailReg = 'Invalid email address';
  } else if (value.inputMailReg.length > 40) {
    error.inputMailReg = 'Must be 40 characters or less';
  }

  return error;
};

const renderField = ({input, placeholder, type, meta}) => {

  let name = "modal-input";

  if (meta.touched && meta.error)
    name += " modal-input-error";

  return (
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} className={name} />
        {meta.touched && ((meta.error && <span className="modal-error">{meta.error}</span>))}
      </div>
    </div>
  )
};

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
        <Field name="inputLoginReg" component={renderField} type="input" placeholder="login" />
      </div>

      <div className="modal-pack">
        <Field name="inputMailReg" component={renderField} type="input" placeholder="mail" />
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


export default reduxForm({
  form: 'registrationModal', validate
})(RegistrationForm);