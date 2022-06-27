import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import Chat from '../Components/Chat';

function Seller() {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState({ name: '', mensagem: [] });
  const [text, setText] = useState('');

  useEffect(() => {
    setContacts([
      {
        name: 'fabio',
        email: 'fabio2@gmail.com',
        mensagem: [
          {
            type: 'client',
            text: 'Oi, preciso de ajuda??',
          },
        ],
      },
    ]);
  }, []);
  return (
    <main>
      <aside>
        {
          contacts.map(({ name }, index) => (
            <Button name={name} stl="opcoes" bool={false} func={() => setMessage(contacts[index])} />
          ))
        }
      </aside>
      <section>
        {
          message.name !== '' && (
            <>
              <Chat name={message.name} message={message.mensagem} />
              <div>
                <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
                <button type="submit">Enviar</button>
              </div>
            </>
          )
        }
      </section>
    </main>
  );
}

export default Seller;
