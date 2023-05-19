import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../Components/LoginButton';
import LoginInput from '../Components/LoginInput';
import {
  FormLogin, GlobalStyle, MainLogin, TitleLogin,
} from '../styles/loginStyle';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [response, setResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('isAuthenticated');
  }, []);

  useEffect(() => {
    setUserData({ username, password });
  }, [username, password]);

  useEffect(() => {
    if (response) {
      localStorage.setItem('isAuthenticated', JSON.stringify(response.role));
      if (response.role === 'admin') {
        setTimeout(() => {
          navigate('/adm');
        }, 500);
      } else if (response.role === 'atendente') {
        setTimeout(() => {
          navigate('/seller');
        }, 500);
      }
    }
  }, [response]);

  return (
    <>
      <GlobalStyle />
      <MainLogin>
        <TitleLogin> Login </TitleLogin>
        <FormLogin>
          <LoginInput type="text" fieldName="User: " setterFunction={setUsername} />
          <LoginInput type="password" fieldName="Pass: " setterFunction={setPassword} />
          <LoginButton userData={userData} setterFunction={setResponse} />
        </FormLogin>
      </MainLogin>
    </>
  );
}
