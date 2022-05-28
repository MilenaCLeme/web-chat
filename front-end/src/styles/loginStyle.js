import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 99%;
  background:#f2f2f2 ;
  font-family: 'Roboto', helvetica, arial, sans-serif;
  font-size: 1.5em;
}
`;

const MainLogin = styled.section`
  margin-bottom: 200px;
`;

const TitleLogin = styled.h1`
  text-align: center;
`;

const FormLogin = styled.form`

  padding: 2em;
  position: relative;
  background-color:rgb(81, 81, 81) ;
  :before {
    content: '';
    position: absolute;
    top: -2px; left: 0;
    height: 2px; width: 100%;
    
    background: linear-gradient(
      to right,
      #35c3c1,
      #00d6b7
    );   
  }
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const LabelLogin = styled.label`
  width: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f8;
  cursor: pointer;
`;

const InputLogin = styled.input`
  flex: 1;
  padding: 1em;
  border: 0;
  color: #8f8f8f;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

const ButtonLogin = styled.button`
  display: block;
  padding: 1em;
  width: 100%;
  background-color: #35c3c1;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: .75em;
  font-weight: 600;
  text-shadow: 0 1px 0 rgba(black, .2);
  :focus {
    outline: none;
    transition: transform .15s ease;
    transform: scale(1.1);
  }
  :disabled {
    background-color: gray !important;
    color: darkgray;
    cursor: not-allowed;
  }
`;

export {
  GlobalStyle,
  MainLogin,
  TitleLogin,
  FormLogin,
  FlexDiv,
  LabelLogin,
  InputLogin,
  ButtonLogin,
};
