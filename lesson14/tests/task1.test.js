const sendInvalidRequest = require('../src/sendInvalidRequest');

describe('Error Handling while sending invalid Request', () => {
    test('Should return an error message for an invalid URL', async () => {
        const errorMessage = await sendInvalidRequest();
        expect(errorMessage).toMatch(/Request failed with status code 404/);
    });
});