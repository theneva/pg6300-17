const express = require('express');
const app = express();

const person = {
  name: 'Liam',
  age: '22',
};

app.get('/person', (req, res) => {
    res.send(person);
});

module.exports = app;
