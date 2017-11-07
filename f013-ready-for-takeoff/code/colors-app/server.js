const express = require('express');
const app = express();

const colors = [
  { name: 'red', hex: 'ff0000' },
  { name: 'green', hex: '00ff00' },
  { name: 'blue', hex: '0000ff' },
];

app.get('/colors', (req, res) => {
  res.send(colors);
});

const port = 1234;
app.listen(port, () => console.log('listening on port', port));
