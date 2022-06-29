import React, { useState, useContext } from 'react';
import checkEmail from '../common/utils/checkEmail';
import Button from '../Components/Button';
import getRandom from '../common/utils/getRandom';
import socket from '../server';
import Chat from '../Components/Chat';
import {
  Answer,
  ChatArea,
  InputChat,
  MainContainer,
  DivClosedButton,
  ParagraphTime,
  FormChat,
  LabelChat,
} from '../styles/homeStyle';
import MyContext from '../Context';

export default function Home() {
  const [chat, setChat] = useState(false);
  const [word, setWord] = useState('');
  const [options, setOptions] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [buttonClick, setButtonClick] = useState('');
  const [startForm, setStartForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [chatClient, setChatClient] = useState(false);
  const [text, setText] = useState('');
  const [people, setPeople] = useState({});

  const { callAll } = useContext(MyContext);

  const disabledButton = () => {
    const newDate = new Date();
    const newHours = newDate.getHours();
    return newHours >= 8 && newHours < 18;
  };

  const startCallWithSeller = (n, e) => {
    const call = {
      id: callAll.length + 1,
      name: n,
      email: e,
      message: [{
        messageId: getRandom(),
        type: 'seller',
        text: 'Como posso ajudar?',
      }],
    };
    setPeople(call.id);
    const newCall = [...callAll, call];
    socket.emit('send_mensage', newCall);
    setChatClient(true);
  };

  const cleanInputText = () => {
    setName('');
    setEmail('');
  };

  const callApi = async (keyWordInput) => {
    await fetch('http://localhost:3001/keyword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyWord: keyWordInput }),
    })
      .then((res) => res.json())
      .then((json) => {
        setButtons(
          json.filter(({ keyWord }) => keyWord.toLowerCase() === keyWordInput.toLowerCase()),
        );
      });
    setOptions(true);
  };

  const insertMessage = (t) => {
    if (t !== t.trim) {
      const arrayNew = callAll.filter((tipo) => tipo.id === people)[0];
      const jsonMessage = {
        messageId: getRandom(),
        type: 'client',
        text: t,
      };
      const newArrayMessage = [...arrayNew.message, jsonMessage];
      const newCall = callAll.map((call) => {
        if (call.id === people) {
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

  const message = callAll.filter((tipo) => tipo.id === people)[0];

  return (
    <MainContainer>
      {
        chatClient && (
          <ChatArea>
            <>
              <DivClosedButton>
                <Button name="voltar" bool={false} func={() => { setChatClient(false); setStartForm(true); }} stl="closed" />
              </DivClosedButton>
              <Chat typePeople="client" name="Assistente" message={message ? message.message : []} />
              <InputChat type="text" value={text} onChange={({ target }) => setText(target.value)} />
              <Button name="Enviar" func={() => { insertMessage(text, name); setText(''); }} stl="final-envia" bool={false} />
            </>
          </ChatArea>
        )
      }
      {
        startForm && (
          <ChatArea>
            <Answer>
              Informe os dados corretamente para poder iniciar a conversa com o atendente
            </Answer>
            <FormChat>
              <LabelChat htmlFor="name">
                <span>Nome:</span>
                <InputChat type="text" id="name" name="name" value={name} onChange={({ target }) => setName(target.value)} />
              </LabelChat>
              <LabelChat htmlFor="email">
                <span>E-mail:</span>
                <InputChat type="text" id="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} />
              </LabelChat>
              <div>
                <Button
                  name="Iniciar conversa"
                  bool={!(name !== '' && email !== '' && checkEmail(email))}
                  func={() => {
                    startCallWithSeller(name, email);
                    setStartForm(false);
                    cleanInputText();
                  }}
                  stl="final-envia"
                />
                <Button name="Voltar" bool={false} func={() => { setStartForm(false); setChat(true); cleanInputText(); }} stl="final-envia" />
              </div>
            </FormChat>
          </ChatArea>
        )
      }
      { chat && (
        <ChatArea>
          <DivClosedButton>
            <Button name="x" bool={false} func={() => { setOptions(false); setChat(false); setWord(''); }} stl="closed" />
          </DivClosedButton>
          { options && (
            <div>
              <div>
                {
                 buttons.length !== 0 ? buttons.map(({ command }) => (
                   <Button name={command} bool={false} key={command} func={() => setButtonClick(command)} stl="opcoes" disabled />
                 )) : (<Answer>Palavra chave não encontrada</Answer>)
                }
              </div>
              <div>
                {
                  buttons.filter(({ command }) => command === buttonClick)
                    .map(({ instructions }) => (
                      <Answer>{instructions}</Answer>
                    ))
                }
              </div>
              <div>
                <Button name="Fale com Atendente" bool={!disabledButton()} func={() => { setStartForm(true); setChat(false); }} stl="falecom" />
              </div>
              <ParagraphTime>Horario de Atendimento: 8 horas ás 18 horas</ParagraphTime>
            </div>
          )}
          <div>
            <Answer>Digite uma palvra chave e clique em enviar para receber as opções:</Answer>
          </div>
          <InputChat
            type="text"
            onChange={({ target }) => setWord(target.value)}
            value={word}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                callApi(word);
              }
            }}
          />
          <Button name="Enviar" bool={false} func={() => { callApi(word); }} stl="final-envia" />

        </ChatArea>
      )}
      <div>
        <Button name="Fale Conosco" bool={startForm || chatClient} func={() => { setStartForm(false); setChat(!chat); }} stl="faleconosco" />
      </div>
    </MainContainer>
  );
}
