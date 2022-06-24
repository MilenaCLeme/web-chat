import PropTypes from 'prop-types';
import React from 'react';

import {
  FaleAtendente, FaleConosco, Finaliza, Opcoes,
} from '../styles/homeStyle';

// eslint-disable-next-line react/prop-types
export default function Button({
  name, func, stl, bool,
}) {
  if (stl === 'faleconosco') {
    return (
      <FaleConosco type="submit" disabled={bool} onClick={func}>
        {name}
      </FaleConosco>
    );
  }
  if (stl === 'falecom') {
    return (
      <FaleAtendente type="submit" disabled={bool} onClick={func}>
        {name}
      </FaleAtendente>
    );
  }
  if (stl === 'opcoes') {
    return (
      <Opcoes type="submit" disabled={bool} onClick={func}>
        {name}
      </Opcoes>
    );
  }
  if (stl === 'final-envia') {
    return (
      <Finaliza type="submit" disabled={bool} onClick={func}>
        {name}
      </Finaliza>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  stl: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};
