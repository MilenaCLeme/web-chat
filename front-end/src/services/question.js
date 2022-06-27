export async function getQuestions() {
  const request = await fetch('http://localhost:3002/keyword');
  const response = await request.json();
  return response;
}

export async function createQuestion(data) {
  const request = await fetch('http://localhost:3002/keyword', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      keyword: data.keyword,
      command: data.command,
      instruction: data.instruction,
    }),
  });
  const response = await request.json();
  return response;
}

export async function deleteQuestion(id) {
  const request = await fetch(`http://localhost:3002/keyword/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();
  return response;
}
