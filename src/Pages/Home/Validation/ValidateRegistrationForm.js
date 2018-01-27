const ValidateRegistrationForm = (value) => {
  const error = {};

  if (!value.inputLoginReg) {
    error.inputLoginReg = 'Required';
  } else if (value.inputLoginReg.length > 40) {
    error.inputLoginReg = 'Must be 40 characters or less';
  } else if (value.inputLoginReg.length < 5) {
    error.inputLoginReg = 'Must be at least 5 characters';
  }

  if (!value.inputMailReg) {
    error.inputMailReg = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.inputMailReg)) {
    error.inputMailReg = 'Invalid email address';
  } else if (value.inputMailReg.length > 40) {
    error.inputMailReg = 'Must be 40 characters or less';
  }

  if (!value.inputPasswordReg) {
    error.inputPasswordReg = 'Required';
  } else if (value.inputPasswordReg.length > 40) {
    error.inputPasswordReg = 'Must be 40 characters or less';
  } else if (value.inputPasswordReg.length < 5) {
    error.inputPasswordReg = 'Must be at least 5 characters';
  }

  if (!value.inputConfirmReg) {
    error.inputConfirmReg = 'Required';
  } else if (value.inputConfirmReg.length > 40) {
    error.inputConfirmReg = 'Must be 40 characters or less';
  } else if (value.inputConfirmReg.length < 5) {
    error.inputConfirmReg = 'Must be at least 5 characters';
  }

  if (value.inputPasswordReg !== value.inputConfirmReg) {
    error.inputConfirmReg = 'Passwords do not match';
  }

  return error;
};

export default ValidateRegistrationForm;
