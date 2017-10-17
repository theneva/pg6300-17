const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const colors = [];

app.get('/colors', (req, res) => {
  res.send(colors);
});

app.post('/colors', (req, res) => {
  const newColor = req.body;

  if (!newColor.name) {
      res.status(400).send('Must contain name');
      return;
  }

  colors.push(newColor);
  res.status(201).send(newColor);
});

app.listen(1234, () => console.log('listening on http://localhost:1234/'));
