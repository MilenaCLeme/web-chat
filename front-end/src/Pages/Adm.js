import React, { useState } from 'react';
import ManageQuestion from '../Components/ManageQuestion';
import ManageUser from '../Components/ManageUser';
import RegisterUser from '../Components/RegisterUser';
import ResgisterQuestion from '../Components/ResgisterQuestion';
import { MainTitle } from '../styles/admStyle';

export default function Adm() {
  const [admOption, setAdmOption] = useState('');

  function renderComponent() {
    if (admOption === 'registerUser') {
      return <RegisterUser />;
    } if (admOption === 'registerQuestion') {
      return <ResgisterQuestion />;
    } if (admOption === 'ManageUsers') {
      return <ManageUser />;
    } if (admOption === 'ManageQuestions') {
      return <ManageQuestion />;
    }
    return <div />;
  }

  return (
    <div>
      <MainTitle>Página de cadastro de novas perguntas e atendentes</MainTitle>
      <div>
        <h1>
          <button type="button" onClick={() => setAdmOption('registerUser')}>
            Cadastrar novo atendente
          </button>
        </h1>
        <h1>
          <button type="button" onClick={() => setAdmOption('registerQuestion')}>
            Cadastrar nova pergunta
          </button>
        </h1>
        <h1>
          <button type="button" onClick={() => setAdmOption('ManageUsers')}>
            Gerenciar atendentes
          </button>
        </h1>
        {/*         <h1>
          <button type="button" onClick={() => setAdmOption('ManageQuestions')}>
            Gerenciar perguntas
          </button>
        </h1> */}
      </div>
      <div>
        {renderComponent()}
      </div>

    </div>
  );
}
