import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageQuestion from '../Components/ManageQuestion';
import ManageUser from '../Components/ManageUser';
import RegisterUser from '../Components/RegisterUser';
import ResgisterQuestion from '../Components/ResgisterQuestion';
import MyContext from '../Context';

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
    <div>
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
