import React, { useState } from 'react';
import { OkButton } from '../styles/admStyle';
import AdmInput from './AdmInput';

export default function RegisterUser() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function submitForm() {
    alert(`Usuário ${username} cadastrado com sucesso`);
    console.log(password);
    console.log(name);
  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        Cadastre um novo atendente:
        <br />
        <AdmInput type="text" fieldName="Email " setterFunction={setUsername} />
        <AdmInput type="text" fieldName="Nome " setterFunction={setName} />
        <AdmInput type="password" fieldName="Senha " setterFunction={setPassword} />
        <OkButton type="submit">Cadastrar</OkButton>
      </form>
    </div>
  );
}
