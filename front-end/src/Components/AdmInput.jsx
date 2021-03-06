import PropTypes from 'prop-types';
import React from 'react';
import { InputAdm, LabelAdm } from '../styles/admStyle';

import { FlexDiv } from '../styles/loginStyle';

export default function AdmInput({
  type, fieldName, placeholder, setterFunction,
}) {
  return (
    <FlexDiv>
      <LabelAdm htmlFor={`input-adm-${type}`}>
        {fieldName}
        {' '}
      </LabelAdm>
      <InputAdm
        className="lf--input"
        placeholder={placeholder}
        id={`input-adm-${type}`}
        type={type}
        onChange={(e) => setterFunction(e.target.value)}
      />
    </FlexDiv>
  );
}

AdmInput.propTypes = {
  type: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setterFunction: PropTypes.func.isRequired,
};
