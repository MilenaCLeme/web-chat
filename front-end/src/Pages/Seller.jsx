import React, { useState, useContext } from 'react';
import socket from '../server';
import Button from '../Components/Button';
import Chat from '../Components/Chat';
import MyContext from '../Context';

function Seller() {
  const [idPeople, setIdPeople] = useState();
  const [text, setText] = useState('');

  const { callAll } = useContext(MyContext);

  const message = callAll.filter((tipo) => tipo.id === idPeople)[0];

  const insertMessage = (t) => {
    if (t !== t.trim) {
      const arrayNew = callAll.filter((tipo) => tipo.id === idPeople)[0];
      const jsonMessage = {
        type: 'seller',
        text: t,
      };
      const newArrayMessage = [...arrayNew.message, jsonMessage];
      const newCall = callAll.map((call) => {
        if (call.id === idPeople) {
          return {
            id: call.id,
            name: call.name,
            email: call.email,
            message: newArrayMessage,
          };
        }
        return { ...call };
      });
      socket.emit('send_mensage', newCall);
    }
  };

  return (
    <main>
      <aside>
        {
          callAll.map(({ name, id }) => (
            <Button key={id} name={name} stl="opcoes" bool={false} func={() => setIdPeople(id)} />
          ))
        }
      </aside>
      <section>
        {
          idPeople && (
            <>
              <Chat typePeople="seller" name={message.name} message={message.message} />
              <div>
                <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
                <button type="submit" onClick={() => { insertMessage(text); setText(''); }}>Enviar</button>
              </div>
            </>
          )
        }
      </section>
    </main>
  );
}

export default Seller;
