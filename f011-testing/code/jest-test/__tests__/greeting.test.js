const greet = require('../Greeting');

describe('Greeting', () => {
  it('has correct form', () => {
    const result = greet('Liam');
    const expected = 'Hello, Liam!';

    expect(result).toEqual(expected);
  });
});
