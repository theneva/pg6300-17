process.env.DB_URI = 'mongodb://localhost/dbtesttesttesttest';

const initializeServer = require('../server');

it('2 = 2', () => {
  expect(2).toEqual(2);
});
