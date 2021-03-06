import React, { useState, useContext } from 'react';
import socket from '../server';
import Button from '../Components/Button';
import Chat from '../Components/Chat';
import MyContext from '../Context';
import {
  MainSeller,
  AsideSeller,
  SectionSeller,
  InputWithButton,
  Info,
} from '../styles/sellerStyle';
import { InputChat } from '../styles/homeStyle';
import getRandom from '../common/utils/getRandom';

function Seller() {
  const [idPeople, setIdPeople] = useState();
  const [text, setText] = useState('');

  const { callAll } = useContext(MyContext);

  const message = callAll.filter((tipo) => tipo.id === idPeople)[0];

  const insertMessage = (t) => {
    if (t.trim()) {
      const arrayNew = callAll.filter((tipo) => tipo.id === idPeople)[0];
      const jsonMessage = {
        messageId: getRandom(),
        type: 'seller',
        text: t,
      };
      const newArrayMessage = [jsonMessage, ...arrayNew.message];
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
    <MainSeller>
      <AsideSeller>
        {
          callAll.length > 0 ? callAll.map(({ name, id }) => (
            <Button key={id} name={name} stl="faleconosco" bool={false} func={() => setIdPeople(id)} />
          )) : (
            <Info>
              <p>Não existe cliente no momento</p>
            </Info>
          )
        }
      </AsideSeller>
      <SectionSeller>
        {
          idPeople && (
            <>
              <Chat typePeople="seller" name={message.name} message={message.message} basis="70%" />
              <InputWithButton>
                <InputChat type="text" value={text} onChange={({ target }) => setText(target.value)} />
                <Button name="Enviar" func={() => { insertMessage(text); setText(''); }} stl="falecom" bool={false} />
              </InputWithButton>
            </>
          )
        }
      </SectionSeller>
    </MainSeller>
  );
}

export default Seller;
