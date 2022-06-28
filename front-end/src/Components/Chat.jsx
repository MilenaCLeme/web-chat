import React from 'react';
import PropTypes from 'prop-types';
import { RightChat, LeftChat } from '../styles/chatStyle';

function Chat({ name, message, typePeople }) {
  return (
    <>
      <h2>{name}</h2>
      <div>
        {
          message.map(({ type, text }) => {
            if (type === typePeople) {
              return (
                <RightChat key={text}>
                  <p>{text}</p>
                </RightChat>
              );
            }
            return (
              <LeftChat key={text}>
                <p>{text}</p>
              </LeftChat>
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
  typePeople: PropTypes.string.isRequired,
};

export default Chat;
