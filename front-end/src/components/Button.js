import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, func }) {
  return (
    <button type="submit" onClick={func}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
