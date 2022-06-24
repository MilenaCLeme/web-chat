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
<<<<<<< HEAD:front-end/src/Components/Button.js
<<<<<<< HEAD:front-end/src/Components/Button.js
      <Finaliza style={name === 'Finalizar' ? { backgroundColor: '#f54053' } : {}} disabled={bool} type="submit" onClick={func}>
=======
      <Finaliza style={name === 'Finalizar' ? { backgroundColor: '#f54053' } : {}} type="submit" onClick={func}>
>>>>>>> ec67a630c3c6bf5c425554e82cc683d213070069:front-end/src/components/Button.js
=======
      <Finaliza style={name === 'Finalizar' ? { backgroundColor: '#f54053' } : {}} type="submit" onClick={func}>
>>>>>>> ec67a630c3c6bf5c425554e82cc683d213070069:front-end/src/components/Button.js
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
