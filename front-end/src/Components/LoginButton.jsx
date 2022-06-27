import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonLogin } from '../styles/loginStyle';

// eslint-disable-next-line react/prop-types
export default function LoginButton({ userData: { username, password } }) {
  const [email, setEmail] = useState(false);
  const [role, setRole] = useState('');
  const [statusCode, setStatusCode] = useState(500);
  const navigate = useNavigate();

  useEffect(() => {
    const re = /\S+@\S+\.\S+/;
    setEmail(re.test(username));
  }, [username]);

  useEffect(() => {
    async function callApi() {
      const request = await fetch('http://localhost:3001/adminlogin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });
      setStatusCode(request.status);
      const response = await request.json();
      setRole(response.role);
    }
    callApi();
  }, [username, password]);

  async function handleClick() {
    if (statusCode === 200) {
      if (role === 'admin') {
        navigate('/adm');
      } else if (role === 'atendente') {
        navigate('/seller');
      }
    } else {
      alert('Dados de Login inválidos');
    }
  }

  return (
    <ButtonLogin
      className="lf--submit"
      type="button"
      onClick={() => handleClick()}
      disabled={!!(!email || password.length < 5)}
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
