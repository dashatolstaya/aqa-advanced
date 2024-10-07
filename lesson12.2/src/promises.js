function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error loading todo endpoint');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error with todo:', error);
    });
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error loading user endpoint');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error with user:', error);
    });
}

Promise.all([fetchTodo(), fetchUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch((error) => {
    console.error('Error with Promise.all:', error);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log('Result of the first promise:', result);
  })
  .catch((error) => {
    console.error('Result of the second promise:', error);
  });
