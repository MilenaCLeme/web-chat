import React, { useState } from 'react';

import { DeleteButton, EditButton } from '../styles/admStyle';
import AdmInput from './AdmInput';

export default function ManageUser() {
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);

  const users = [{
    username: 'admin@admin.com',
  },
  {
    username: 'angelo@angelo.com',
  },
  {
    username: 'dasdsad@dsadsadsa.com',
  }, {
    username: 'adm121312in@admi32132132n.com',
  }];
  console.log(password);
  return (
    <div>
      {users.map((user) => (
        <div>
          {user.username}
          <EditButton onClick={() => setHidden(false)} type="button">Alterar senha</EditButton>
          <DeleteButton type="button">Excluir</DeleteButton>
          <div hidden={hidden}>
            <form>
              <AdmInput type="text" fieldName="Senha " setterFunction={setPassword} />
              <button type="button">OK</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
