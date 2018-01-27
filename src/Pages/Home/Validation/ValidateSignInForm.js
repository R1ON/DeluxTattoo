const ValidateSignInForm = (value) => {
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

export default ValidateSignInForm;
