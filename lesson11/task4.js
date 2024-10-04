class Todo {
    async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error('Error with fetching todo:', error);
        }
    }
}

class Users {
    async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('Errorwith user:', error);
        }
    }
}

const todo1 = new Todo();
const user1 = new Users();

async function fetchDataUsingClasses() {
    try {
        const [todo, user] = await Promise.all([todo1.fetchTodo(), user1.fetchUser()]);
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }

    try {
        const result = await Promise.race([todo1.fetchTodo(), user1.fetchUser()]);
        console.log('Promise.race result:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

fetchDataUsingClasses();