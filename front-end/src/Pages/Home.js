import React, { useState } from 'react';
import Button from '../Components/Button';
import {
  Answer,
  ChatArea,
  InputChat,
  MainContainer,
} from '../styles/homeStyle';

export default function Home() {
  const [chat, setChat] = useState(false);
  const [word, setWord] = useState('');
  const [options, setOptions] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [buttonClick, setButtonClick] = useState('');

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
        setOptions(true);
      });
  };

  return (
    <MainContainer>
      { chat ? (
        <ChatArea>
          { options ? (
            <div>
              <div>
                {
                 buttons.length !== 0 ? buttons.map(({ command }) => (
                   <Button name={command} func={() => setButtonClick(command)} stl="opcoes" />
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
                <a target="_blank" href="wa.me/55">
                  <Button name="Fale com Atendente" stl="falecom" />
                </a>
              </div>
            </div>
          ) : null}
          <div>
            <Answer>Digite uma palvra chave e click em enviar para receber as opções:</Answer>
          </div>
          <InputChat type="text" onChange={({ target }) => setWord(target.value)} value={word} />
          <Button name="Enviar" func={() => { callApi(word); }} stl="final-envia" />
          <Button name="Finalizar" func={() => setOptions(false)} stl="final-envia" />

        </ChatArea>
      ) : null}
      <div>
        <Button name="Fale Conosco" func={() => setChat(!chat)} stl="faleconosco" />
      </div>
    </MainContainer>
  );
}
