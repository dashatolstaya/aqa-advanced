const axios = require('axios');
const sendCustomRequest = require('../src/sendCustomRequest');

jest.mock('axios');

describe('Verifying request headers and parameters', () => {
    test('should include custom headers and params in the request', async () => {
        const mockResponse = { status: 200, data: [] };
        axios.get.mockResolvedValue(mockResponse);

        const response = await sendCustomRequest();
        expect(axios.get).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/posts',
            {
                headers: {
                    'Authorization': 'Bearer token-example',
                    'Custom-Header': 'HeaderValue'
                },
                params: {
                    userId: 1
                }
            }
        );
        expect(response.status).toBe(200);
    });
});
