import React, { useEffect, useState } from 'react';
import { createUser } from '../services/user';
import { OkButton } from '../styles/admStyle';
import AdmInput from './AdmInput';

export default function RegisterUser() {
  const [validEmail, setValidEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const re = /\S+@\S+\.\S+/;
    setValidEmail(re.test(email));
  });

  async function submitForm(e) {
    e.preventDefault(e);
    const newUser = await createUser(name, email, password);
    if (newUser === 'O atendente já existe') {
      return alert(newUser);
    }
    window.location.reload();
    return alert('Usuário cadastrado');
  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        Cadastre um novo atendente:
        <br />
        <AdmInput type="text" fieldName="Nome " placeholder="" setterFunction={setName} />
        <AdmInput type="text" fieldName="Email " placeholder="" setterFunction={setEmail} />
        <AdmInput type="password" fieldName="Senha " placeholder="No mímino 5 caracteres" setterFunction={setPassword} />
        <OkButton disabled={password.length < 5 || !validEmail} type="submit">Cadastrar</OkButton>
      </form>
    </div>
  );
}
