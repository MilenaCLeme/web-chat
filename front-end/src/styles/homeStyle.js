import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 99%;
  background: #f2f2f2 ;
  font-family: 'Roboto', helvetica, arial, sans-serif;
  font-size: 1.5em;
}
`;

const MainContainer = styled.section`
  max-width: 100%;
  max-height: 100%;
  z-index: 10001;
  position: fixed;
  bottom: 10px;
  right: 12px;
`;

const ChatArea = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  float: right;
  width: 342px;
`;

const InputChat = styled.input`
  flex: 1;
  padding: 0.2em;
  border-radius: 10px;
  width: 100%;
  font-size: 1rem;
`;

const FaleConosco = styled.button`
  display: block;
  padding: 1em;
  width: 200px;
  background-color: #35c3c1;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: .75em;
  font-weight: 600;
  text-shadow: 0 1px 0 rgba(black, .2);
  float: right;
  margin-top: 5px;
  :disabled {
    background-color: #666;
    cursor: auto;
  }
`;

const Opcoes = styled.button`
  background-color: #fff;
  border: 1 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d172a;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 600;
  line-height: 1;
  padding: 0.6rem 1.6rem;
  text-align: center;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  margin: 7px;
  
  :hover {
    background-color: #cecece;
  }

`;

const FaleAtendente = styled.button`
    backface-visibility: hidden;
  background-color: #25d366;
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
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
  :disabled {
    background-color: #666;
    cursor: auto;
    box-shadow: none
  }
`;

const Finaliza = styled.button`
  backface-visibility: hidden;
  background-color: #405cf5;
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
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
  :disabled {
    background-color: #e8e8e8;
    cursor: auto;
    box-shadow: none
  }
`;

const Answer = styled.p`
  border: 1px solid;
  border-radius: 6px;
  background-color: #e8e8e8;
  padding: 15px;
  max-width: fit-content;
`;

const ClosedButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: large;
`;

const DivClosedButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ParagraphTime = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  font-weight: 600;
`;

const FormChat = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelChat = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 5px;

  span {
    width: 65px;
    font-size: large;
    font-weight: 600;
    color: #666;
  }
`;

const ChatHome = styled.div`
  h2 {
    border-bottom: 1px solid;
  }
`;

const InputWithButton = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
  }

  button {
    margin-left: 10px
  }
`;

export {
  GlobalStyle,
  MainContainer,
  ChatArea,
  InputChat,
  FaleConosco,
  Opcoes,
  FaleAtendente,
  Finaliza,
  Answer,
  ClosedButton,
  DivClosedButton,
  ParagraphTime,
  FormChat,
  LabelChat,
  ChatHome,
  InputWithButton,
};
