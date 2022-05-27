import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonLogin } from '../styles/loginStyle';

// eslint-disable-next-line react/prop-types
export default function LoginButton({ userData: { username, password } }) {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const correctLogin = {
    username: 'admin',
    password: '123456',
  };

  useEffect(() => {
    // async function callApi(){
    //   const response = await functionApi()
    //   if (response.statusCode === 200)
    //   setRedirect(true);
    // }
    // callAPi()
    if (correctLogin.username === username
      && correctLogin.password === password) {
      setRedirect(true);
    }
  }, [username, password]);

  function handleClick() {
    if (redirect) {
      navigate('/chat');
    } else {
      alert('Dados de Login inválidos');
    }
  }

  return (
    <ButtonLogin
      className="lf--submit"
      type="button"
      onClick={() => handleClick}
      disabled={!!(username.length < 5 || password.length < 6)}
    >
      Entrar
    </ButtonLogin>
  );
}

LoginButton.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,

};
