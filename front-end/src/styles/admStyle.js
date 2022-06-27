import styled from 'styled-components';

const InputAdm = styled.input`
  flex: 1;
  padding: 0.5em;
  border: 1;
  font-size: 1rem;
  max-width: fit-content;

`;

const LabelAdm = styled.label`
  width: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f8;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  backface-visibility: hidden;
  background-color: red;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  height: 34px;
  line-height: 0.65;
  margin: 7px 7px 7px 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: darkred;
    box-shadow: 1px 1px 2px ;
  }
`;

const EditButton = styled.button`
  backface-visibility: hidden;
  background-color: green;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  height: 34px;
  line-height: 0.85;
  margin: 7px 7px 7px 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: darkgreen;
    box-shadow: 1px 1px 2px ;
  }
`;

const OkButton = styled.button`
    backface-visibility: hidden;
    background-color: #187cef;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    height: 29px;
    line-height: 0.65;
    margin: 7px 7px 7px 0;
    outline: none;
    overflow: hidden;
    padding: 0 10px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :hover {
      background-color: #4c97ea;
      box-shadow: 1px 1px 2px ;
    }
    :disabled {
    background-color: gray;

    }
  `;

export {
  InputAdm,
  LabelAdm,
  DeleteButton,
  EditButton,
  OkButton,
};
