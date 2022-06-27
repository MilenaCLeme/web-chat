import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import checkEmail from '../common/utils/checkEmail';
import Button from '../Components/Button';
import Chat from '../Components/Chat';
import {
  Answer,
  ChatArea,
  InputChat,
  MainContainer,
} from '../styles/homeStyle';

const socket = io.connect('http://localhost:3001');

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

  const disabledButton = () => {
    const newDate = new Date();
    const newHours = newDate.getHours();
    return newHours >= 8 && newHours < 18;
  };

  useEffect(async () => {
    await socket.emit('send_mensage', [{ name: '', message: '' }]);
  }, []);

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

  return (
    <MainContainer>
      {
        chatClient && (
          <ChatArea>
            <>
              <button type="button" onClick={() => { setChatClient(false); setStartForm(true); }}>Voltar</button>
              <Chat name="Assistente" message={[]} />
              <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
              <button type="submit">Enviar</button>
            </>
          </ChatArea>
        )
      }
      {
        startForm && (
          <ChatArea>
            <p>Informe os dados corretamente para poder iniciar a conversa com o atendente</p>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="name">
                Nome:
                <input type="text" id="name" name="name" value={name} onChange={({ target }) => setName(target.value)} />
              </label>
              <label htmlFor="email">
                E-mail:
                <input type="text" id="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} />
              </label>
              <button type="button" onClick={() => { setStartForm(false); setChat(true); }}>Voltar</button>
              <button
                type="button"
                disabled={!(name !== '' && email !== '' && checkEmail(email))}
                onClick={() => { setChatClient(true); setStartForm(false); }}
              >
                Iniciar conversa
              </button>
            </form>
          </ChatArea>
        )
      }
      { chat && (
        <ChatArea>
          <Button name="x" bool={false} func={() => { setOptions(false); setChat(false); setWord(''); }} stl="final-envia" />
          { options && (
            <div>
              <div>
                {
                 buttons.length !== 0 ? buttons.map(({ command }) => (
                   <Button name={command} bool={false} func={() => setButtonClick(command)} stl="opcoes" disabled />
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
              <p>Horario de Atendimento: 8 horas ás 18 horas</p>
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
