import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function LoginButton({ userData }) {
  const navigate = useNavigate();

  function handleClick() {
    console.log(userData);
    navigate('/chat');
  }

  return (
    <button className="lf--submit" type="button" onClick={handleClick}> Entrar </button>
  );
}

export default LoginButton;
