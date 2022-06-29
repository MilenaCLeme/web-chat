<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
>>>>>>> fe1d099c1b8da6a0fb01090d9c71856df046eab4
import ManageQuestion from '../Components/ManageQuestion';
import ManageUser from '../Components/ManageUser';
import RegisterUser from '../Components/RegisterUser';
import ResgisterQuestion from '../Components/ResgisterQuestion';
<<<<<<< HEAD
import MyContext from '../Context';
=======
import { MainTitle, ButtonsDiv, MainDiv } from '../styles/admStyle';
import Button from '../Components/Button';
>>>>>>> fe1d099c1b8da6a0fb01090d9c71856df046eab4

export default function Adm() {
  const navigate = useNavigate();
  const [admOption, setAdmOption] = useState('');
  const { roleLogin } = useContext(MyContext);

  useEffect(() => {
    if (!roleLogin) {
      navigate('/login');
    }
  }, []);

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
