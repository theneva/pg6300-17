const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use('/', bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

let colors = [
  { hex: '#ff0000', name: 'red' },
  { hex: '#00ff00', name: 'green' },
  { hex: '#0000ff', name: 'blue' },
];

// expose elements
// HTTP GET /colors
app.get('/colors', (req, res) => {
  res.send(colors);
});

// create new element
app.post('/colors', (req, res) => {
  const newColor = req.body;

  colors.push(newColor);

  res.status(201).send(newColor);
});

// delete element
app.delete('/colors/:hexToFind', (req, res) => {
  const hexToFind = req.params.hexToFind;
  console.log('hexToFind', hexToFind);

  const index = colors.findIndex(
    color => color.hex === '#' + hexToFind
  );

  if (index === -1) {
    res.status(404).send('Color ' + hexToFind + ' does not exist');
    return;
  }

  colors.splice(index, 1);

  res.sendStatus(204);
});

app.listen(1234, () => {
  console.log('listening on http://localhost:1234/');
});



















