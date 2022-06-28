export async function getUser() {
  const request = await fetch('http://localhost:3001/admin');
  const response = await request.json();
  return response;
}

export async function createUser(name, email, password) {
  const request = await fetch('http://localhost:3001/admin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role: 'atendente',
    }),
  });
  const response = await request.json();
  return response;
}

export async function updateUser(id, name, email, password) {
  await fetch(`http://localhost:3001/admin/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role: 'atendente',
    }),
  });
}

export async function deleteUser(id) {
  await fetch(`http://localhost:3001/admin/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
