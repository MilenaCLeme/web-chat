import React from 'react';
import PropTypes from 'prop-types';

function Chat({ name, message }) {
  return (
    <>
      <h2>{name}</h2>
      <div>
        {
          message.map(({ type, text }) => {
            if (type === 'client') {
              return (
                <div>
                  <p>{text}</p>
                </div>
              );
            }
            return (
              <div>
                <p style={{ color: 'red' }}>{text}</p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

Chat.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default Chat;
