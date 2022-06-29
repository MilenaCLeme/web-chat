import React, { useState, useEffect } from 'react';
import { deleteUser, getUser, updateUser } from '../services/user';

import { DeleteButton, EditButton } from '../styles/admStyle';
import AdmInput from './AdmInput';

export default function ManageUser() {
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function callApi() {
      const newusers = await getUser();
      setUsers(newusers);
    }
    callApi();
  }, []);

  async function deleteAtendente(id) {
    await deleteUser(id);
    window.location.reload();
    return alert('Atendente removido');
  }

  async function updatePassword(id, name, email, pass) {
    await updateUser(id, name, email, pass);
    window.location.reload();
    return alert('Senha alterada');
  }

  return (
    <div>
      {users.filter((user) => user.role !== 'admin').map((user) => (
        <div>
          <h3>
            {user.name}
          </h3>
          <EditButton
            onClick={() => {
              document.getElementById(`edit-${user.id}`).hidden = false;
            }}
            type="button"
          >
            Alterar senha
          </EditButton>
          <DeleteButton type="button" onClick={() => deleteAtendente(user.id)}>Excluir</DeleteButton>
          <div id={`edit-${user.id}`} hidden>
            <form style={{ display: 'flex', alignItems: 'baseline' }}>
              <AdmInput type="password" fieldName="Senha " placeholder="Min. 5 caracteres" setterFunction={setPassword} />
              <button
                disabled={password.length < 5}
                type="button"
                onClick={() => updatePassword(user.id, user.name, user.email, password)}
              >
                OK
              </button>
            </form>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
