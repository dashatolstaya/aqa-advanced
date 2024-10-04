async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('Error with fetching todo:', error);
    }
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error with fetching user:', error);
    }
}

async function fetchData() {
    try {
        const [todo, user] = await Promise.all([getTodo(), getUser()]);
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }

    try {
        const todoPromise = getTodo();
        const userPromise = getUser();
        const result = await Promise.race([todoPromise, userPromise]);
        console.log('Result:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

fetchData();