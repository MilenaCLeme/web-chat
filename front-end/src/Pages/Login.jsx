import React, { useEffect, useState } from 'react';
import LoginButton from '../Components/LoginButton';
import LoginInput from '../Components/LoginInput';
import '../styles/loginStyle.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({ username: '', password: '' });

  useEffect(() => {
    setUserData({ username, password });
  }, [username, password]);

  return (
    <section className="main-login">
      <h1> Login </h1>
      <form className="login-form">
        <LoginInput type="text" fieldName="User: " setterFunction={setUsername} />
        <LoginInput type="password" fieldName="Pass: " setterFunction={setPassword} />
        <LoginButton userData={userData} />
      </form>
    </section>
  );
}
