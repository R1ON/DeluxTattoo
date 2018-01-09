import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Form, Field, reduxForm } from 'redux-form';

import '../../Styles/HeaderStyle.sass'

const validate = (value) => {
  const error = {};

  if (!value.inputMailSign) {
    error.inputMailSign = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.inputMailSign)) {
    error.inputMailSign = 'Invalid email address';
  } else if (value.inputMailSign.length > 40) {
    error.inputMailSign = 'Must be 40 characters or less';
  }

  if (!value.inputPasswordSign) {
    error.inputPasswordSign = 'Required';
  } else if (value.inputPasswordSign.length > 40) {
    error.inputPasswordSign = 'Must be 40 characters or less';
  } else if (value.inputPasswordSign.length < 5) {
    error.inputPasswordSign = 'Must be at least 5 characters';
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

const SignInForm = ({ onSubmit, onCloseModal, onRegistrationModalOpen }) => (
  <Form onSubmit={onSubmit}>
    <Row className="modal-button">
      <Col
        lg={6} md={6} sm={6} xs={6}
        className="modal-header modal-header-registration modal-not-active"
        onClick={onRegistrationModalOpen}
      >
        Registration
      </Col>
      <Col
        lg={6} md={6} sm={6} xs={6}
        className="modal-header modal-header-sign"
      >
        Sign in
      </Col>
    </Row>

    <div className="modal-content">
      <div className="modal-pack">
        <Field name="inputMailSign" component={renderField} type="input" placeholder="mail" />
      </div>

      <div className="modal-pack">
        <Field name="inputPasswordSign" component={renderField} type="password" placeholder="password" />
      </div>
    </div>

    <Row className="modal-button">
      <Col md={6} onClick={onCloseModal} className="modal-footer modal-footer-cancel">
        Cancel
      </Col>
      <Col md={6} className="modal-footer modal-footer-okay">
        <button className="modal-footer-submit" type="submit">Sign in</button>
      </Col>
    </Row>
  </Form>
);

export default reduxForm({
  form: 'signInModal', validate
})(SignInForm);