import React, { useEffect, useState } from 'react';
import LoginButton from '../Components/LoginButton';
import LoginInput from '../Components/LoginInput';
import {
  FormLogin, GlobalStyle, MainLogin, TitleLogin,
} from '../styles/loginStyle';
import '../styles/loginStyle.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({ username: '', password: '' });

  useEffect(() => {
    setUserData({ username, password });
  }, [username, password]);

  return (
    <>
      <GlobalStyle />
      <MainLogin>
        <TitleLogin> Login </TitleLogin>
        <FormLogin>
          <LoginInput type="text" fieldName="User: " setterFunction={setUsername} />
          <LoginInput type="password" fieldName="Pass: " setterFunction={setPassword} />
          <LoginButton userData={userData} />
        </FormLogin>
      </MainLogin>
    </>
  );
}
