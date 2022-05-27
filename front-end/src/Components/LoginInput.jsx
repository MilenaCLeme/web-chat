import React from 'react';
import PropTypes from 'prop-types';

export default function LoginInput({ type, fieldName, setterFunction }) {
  return (
    <div className="flex-row">
      <label className="lf--label" htmlFor={`input-login-${type}`}>
        {fieldName}
        {' '}
      </label>
      <input
        className="lf--input"
        id={`input-login-${type}`}
        type={type}
        onChange={(e) => setterFunction(e.target.value)}
        autoComplete="on"
      />
    </div>

  );
}

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  setterFunction: PropTypes.func.isRequired,
};
