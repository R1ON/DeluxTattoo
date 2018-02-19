import React from 'react';

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

export default RenderField;
