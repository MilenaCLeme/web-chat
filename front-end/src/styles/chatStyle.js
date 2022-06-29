import styled from 'styled-components';

const RightChat = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    border: 1px solid #405cf5;
    padding: 10px;
    border-radius: 10px;
    background-color: #405cf5;
    color: white;
    font-size: medium;
    font-weight: 500;
  }
`;

const LeftChat = styled.div`
  display: flex;
  justify-content: flex-start;

  p {
    border: 1px solid #e8e8e8;
    padding: 10px;
    border-radius: 10px;
    background-color: #e8e8e8;
    color: #666;
    font-size: medium;
    font-weight: 500;
  }
`;

const DivChat = styled.div`
  flex-basis: ${(props) => props.number};
  width: 324px;
  height: 180px;
  overflow: auto;
  padding: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column-reverse;
`;

export {
  RightChat,
  LeftChat,
  DivChat,
};
