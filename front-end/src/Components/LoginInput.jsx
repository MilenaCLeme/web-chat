import PropTypes from 'prop-types';
import React from 'react';

import { FlexDiv, InputLogin, LabelLogin } from '../styles/loginStyle';

export default function LoginInput({ type, fieldName, setterFunction }) {
  return (
    <FlexDiv>
      <LabelLogin htmlFor={`input-login-${type}`}>
        {fieldName}
        {' '}
      </LabelLogin>
      <InputLogin
        className="lf--input"
        id={`input-login-${type}`}
        type={type}
        onChange={(e) => setterFunction(e.target.value)}
        autoComplete="on"
      />
    </FlexDiv>
  );
}

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  setterFunction: PropTypes.func.isRequired,
};
