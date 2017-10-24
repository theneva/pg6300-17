const express = require('express');
const request = require('supertest');
const app = express();

const api = require('../api')

// make api available
app.use(api);

describe('/person', () => {
  it('should return a JSON person', () => {
    // send a request
    return request(app)
      .get('/person')

      // verify response
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(res => {
        const person = res.body;
        expect(person.name).toEqual('Liam');
        expect(person.age).toEqual('22');
      });
  });
});
