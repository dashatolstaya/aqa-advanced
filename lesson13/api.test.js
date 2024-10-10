const axios = require('axios');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

api.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
});

describe('Verifying JSONPlaceholder API', () => {

    test('GET /posts/1 should return first post in the list', async () => {
        const response = await api.get('/posts/1');
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 1);
        expect(response.data).toHaveProperty('title');
        expect(response.data).toHaveProperty('body');
    });

    test('GET /posts/1/comments should return a list of comments', async () => {
        const response = await api.get('/posts/1/comments');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('POST /posts should create a new post', async () => {
        const response = await api.post('/posts', {
            title: 'First post',
            body: 'It is my first post about this book',
            userId: 1
        });
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data.title).toBe('First post');
        expect(response.data.body).toBe('It is my first post about this book');
        expect(response.data.userId).toBe(1);
    });

    test('POST /comments should create a new comment', async () => {
        const response = await api.post('/comments', {
            postId: 1,
            name: 'First Comment',
            email: 'dasha@gmail.com',
            body: 'This is my first test comment.'
        });
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data.postId).toBe(1);
        expect(response.data.name).toBe('First Comment');
    });

    test('GET /users should return a list of users', async () => {
        const response = await api.get('/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });
});
