import React from 'react';
import PropTypes from 'prop-types';
import { RightChat, LeftChat, DivChat } from '../styles/chatStyle';

function Chat({
  name, message, typePeople, basis,
}) {
  return (
    <>
      <h2>{name}</h2>
      <DivChat number={basis}>
        {
          message.map(({ type, text, messageId }) => {
            if (type === typePeople) {
              return (
                <RightChat key={messageId}>
                  <p>{text}</p>
                </RightChat>
              );
            }
            return (
              <LeftChat key={`Left${messageId}`}>
                <p>{text}</p>
              </LeftChat>
            );
          })
        }
      </DivChat>
    </>
  );
}

Chat.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(PropTypes.shape({
    messageId: PropTypes.number,
    type: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  typePeople: PropTypes.string.isRequired,
  basis: PropTypes.string.isRequired,
};

export default Chat;
