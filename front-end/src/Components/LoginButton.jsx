import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ButtonLogin } from '../styles/loginStyle';
import MyContext from '../Context';

// eslint-disable-next-line react/prop-types
export default function LoginButton({ userData: { username, password }, setterFunction }) {
  const [email, setEmail] = useState(false);
  const { setRoleLogin } = useContext(MyContext);

  useEffect(() => {
    const re = /\S+@\S+\.\S+/;
    setEmail(re.test(username));
  }, [username]);

  async function clickLogin() {
    try {
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
      const response = await request.json();
      if (response === 'Email ou senha incorretos') {
        alert('Dados de Login inválidos');
      }
      setterFunction(response);
      setRoleLogin(response.role);
    } catch {
      console.log('Erro');
    }
  }

  return (
    <ButtonLogin
      className="lf--submit"
      type="button"
      onClick={() => clickLogin()}
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
