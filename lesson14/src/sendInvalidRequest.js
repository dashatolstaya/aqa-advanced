const axios = require('axios');

const sendInvalidRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
        return response.data;
    } catch (error) {
        return error.message;
    }
};

module.exports = sendInvalidRequest;
