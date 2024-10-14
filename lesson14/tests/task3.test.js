const axios = require('axios');
const fetchData = require('../src/fetchData');

jest.mock('axios');

describe('Mocking Axios in Jest', () => {
    test('Should mock successful HTTP request', async () => {
        const mockData = { id: 1, title: 'Mocked Post' };
        axios.get.mockResolvedValue({ data: mockData });

        const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
        expect(data).toEqual(mockData);
    });

    test('Should mock a failed HTTP request', async () => {
        const mockErrorMessage = 'Network Error';
        axios.get.mockRejectedValue(new Error(mockErrorMessage));

        const data = await fetchData('https://jsonplaceholder.typicode.com/posts/invalid');
        expect(data).toBe(mockErrorMessage);
    });
});
