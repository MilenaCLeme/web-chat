import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import socket from '../server';
import MyContext from '.';

socket.on('connect', () => console.log('[IO] => new connnwct'));

function Provider({ children }) {
  const [callAll, setCallAll] = useState([]);

  useEffect(() => {
    const handleNew = (newCall) => setCallAll(newCall);
    socket.on('send_mensage', handleNew);
    return () => socket.off('send_mensage', handleNew);
  }, [callAll]);

  const armazena = useMemo(() => ({
    callAll, setCallAll,
  }), [callAll]);

  return (
    <MyContext.Provider value={armazena}>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
