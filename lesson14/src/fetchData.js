const axios = require('axios');

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error.message;
    }
};

module.exports = fetchData;
