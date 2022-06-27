export async function getUser() {
  const request = await fetch('http://localhost:3002/user');
  const response = await request.json();
  return response;
}

export async function createUser(data) {
  const request = await fetch('http://localhost:3002/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: data.username,
      name: data.name,
      password: data.password,
    }),
  });
  const response = await request.json();
  return response;
}

export async function deleteUser(username) {
  const request = await fetch(`http://localhost:3002/user/${username}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();
  return response;
}
