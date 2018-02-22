import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({
  input, placeholder, type, meta
}) => {
  let name = 'modal-input';

  if (meta.touched && meta.error) { name += ' modal-input-error'; }

  return (
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} className={name} />
        {meta.touched && ((meta.error && <span className="modal-error">{meta.error}</span>))}
      </div>
    </div>
  );
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default RenderField;
