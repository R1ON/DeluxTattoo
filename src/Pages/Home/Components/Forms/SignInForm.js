import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, Field, reduxForm } from 'redux-form';

import validate from '../../Validation/ValidateSignInForm';
import RenderField from './RenderField';

import '../../Styles/HomeStyle.sass'

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
        <Field name="inputMailSign" component={RenderField} type="input" placeholder="mail" />
      </div>

      <div className="modal-pack">
        <Field name="inputPasswordSign" component={RenderField} type="password" placeholder="password" />
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