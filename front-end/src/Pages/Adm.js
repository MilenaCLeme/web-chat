import React, { useState } from 'react';
import ManageQuestion from '../Components/ManageQuestion';
import ManageUser from '../Components/ManageUser';
import RegisterUser from '../Components/RegisterUser';
import ResgisterQuestion from '../Components/ResgisterQuestion';
import { MainTitle, ButtonsDiv, MainDiv } from '../styles/admStyle';
import Button from '../Components/Button';

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
    <MainDiv>
      <MainTitle>Cadastro de novas perguntas e atendentes</MainTitle>
      <ButtonsDiv>
        <Button type="button" stl="faleconosco" bool={false} name="Cadastrar novo atendente" func={() => setAdmOption('registerUser')} />
        <Button type="button" stl="faleconosco" bool={false} name="Cadastrar nova pergunta" func={() => setAdmOption('registerQuestion')} />
        <Button type="button" stl="faleconosco" bool={false} name="Gerenciar atendentes" func={() => setAdmOption('ManageUsers')} />
        {renderComponent()}
      </ButtonsDiv>
    </MainDiv>
  );
}
