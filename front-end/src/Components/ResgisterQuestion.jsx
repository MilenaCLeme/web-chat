import React, { useState } from 'react';
import { createQuestion } from '../services/question';
import { LabelAdm, OkButton } from '../styles/admStyle';
import AdmInput from './AdmInput';

export default function ResgisterQuestion() {
  const [question, setQuestion] = useState('');
  const [command, setCommand] = useState('');

  const [answer, setAnswer] = useState('');

  async function submitForm() {
    await createQuestion(question, command, answer);
    alert('Pergunta cadastrada');
  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        Cadastre uma nova pergunta:
        <br />
        <AdmInput type="text" fieldName="Palavra-chave " setterFunction={setQuestion} />
        <AdmInput type="text" fieldName="Comando " setterFunction={setCommand} />
        <LabelAdm htmlFor="answer-box">
          Resposta
        </LabelAdm>
        <textarea
          name="answer-box"
          id="answer-box"
          rows="5"
          cols="40"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <br />
        <OkButton type="submit">Cadastrar</OkButton>
      </form>
    </div>
  );
}
