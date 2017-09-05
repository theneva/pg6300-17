const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kittens');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Kitten = mongoose.model('Kitten', {
  name: { type: String, required: true },
  level: { type: Number, required: true },
});

app.get('/kittens', (req, res) => {
  Kitten.find((err, kittens) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(kittens);
  })
});

app.post('/kittens', (req, res) => {
  const body = req.body;

  const kitten = new Kitten(body);

  kitten.save((err, savedKitten) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(savedKitten);
  });
});

app.listen(1234, () => console.log("listening on 1234!"));
