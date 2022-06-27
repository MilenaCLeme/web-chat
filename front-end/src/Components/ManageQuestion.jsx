import React, { useEffect, useState } from 'react';
import { deleteQuestion, getQuestions } from '../services/question';
import { DeleteButton, EditButton, LabelAdm } from '../styles/admStyle';
import AdmInput from './AdmInput';

export default function ManageQuestion() {
  const [questions2, setQuestion] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    async function apiCall() {
      const newQuestions = getQuestions();
      setQuestion(newQuestions);
    }
    apiCall();
    console.log(questions2);
  }, []);

  const questions = [{
    keyword: 'boleto a pagar',
    command: 'boleto',
    instruction: 'Pague o boleto nas lotericas',
  },
  {
    keyword: 'boleto compensar',
    command: 'boleto',
    instruction: 'Boleto compensa em 2 dias',
  },
  {
    keyword: '2 via boleto ',
    command: 'boleto',
    instruction: 'Peça segunda via aqui',
  }];

  async function handleDelete() {
    await deleteQuestion();
  }

  return (
    <div>
      {questions.map((question) => (
        <div>
          {question.keyword}
          <EditButton type="button" onClick={() => setHidden(false)}>Editar</EditButton>
          <DeleteButton onClick={() => handleDelete} type="button">Excluir</DeleteButton>
          <div hidden={hidden}>

            <form>
              <AdmInput type="text" fieldName="Palavra-chave " />
              <AdmInput type="text" fieldName="Comando " />
              <LabelAdm htmlFor="answer-box">
                Resposta
              </LabelAdm>
              <textarea
                name="answer-box"
                id="answer-box"
                rows="5"
                cols="40"
              />
              <br />
              <button type="submit">ok</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
