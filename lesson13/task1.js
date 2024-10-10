const axios = require('axios');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
}, error => {
    console.error('Request Error', error);
    return Promise.reject(error);
});


api.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.error('Response Error', error);
    return Promise.reject(error);
});

const validateResponse = (response, expectedStatusCode) => {
    if (response.status !== expectedStatusCode) {
        console.error(`Expect to receive status ${expectedStatusCode}, but got ${response.status}`);
    } else {
        console.log(`Status is correct: ${response.status}`);
    }

    if (!response.data || typeof response.data !== 'object') {
        console.error('Receive an invalid data in response');
    } else {
        console.log('Data is correct:', response.data);
    }
};

(async () => {
    try {
        const getResponse1 = await api.get('/posts/1');
        console.log('GET /posts/1 Response:', getResponse1.data);
        validateResponse(getResponse1, 200);

        const getResponse2 = await api.get('/posts/1/comments');
        console.log('GET /posts/1/comments Response:', getResponse2.data);
        validateResponse(getResponse2, 200);

        const postResponse1 = await api.post('/posts', {
            title: 'First Post',
            body: 'Hello! It is my first Post!',
            userId: 1
        });
        console.log('POST /posts Response:', postResponse1.data);
        validateResponse(postResponse1, 201);

        const postResponse2 = await api.post('/comments', {
            postId: 1,
            name: 'Great Book',
            email: 'dasha@gmail.com',
            body: 'This is an amazing book!'
        });
        console.log('POST /comments Response:', postResponse2.data);
        validateResponse(postResponse2, 201);

        const getResponse3 = await api.get('/users');
        console.log('GET /users Response:', getResponse3.data);
        validateResponse(getResponse3, 200);
    } catch (error) {
        console.error('Error occurred during API requests:', error.message);
    }
})();




