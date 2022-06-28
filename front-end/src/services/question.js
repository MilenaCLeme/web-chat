export async function getQuestions() {
  const request = await fetch('http://localhost:3001/keyword');
  const response = await request.json();
  return response;
}

export async function createQuestion(keyWord, command, instructions) {
  const request = await fetch('http://localhost:3001/keyword/new', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      keyWord,
      command,
      instructions,
    }),
  });
  const response = await request.json();
  return response;
}

export async function deleteQuestion(id) {
  const request = await fetch(`http://localhost:3001/keyword/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();
  return response;
}
