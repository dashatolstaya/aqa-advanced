const axios = require('axios');

const sendCustomRequest = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Authorization': 'Bearer token-example',
            'Custom-Header': 'HeaderValue'
        },
        params: {
            userId: 1
        }
    });
    return response;
};

module.exports = sendCustomRequest;
