const db = require('mongoose');

const dbUri = process.env.DB_URI || 'mongodb://localhost/dbtest';

db.model('Person', {
  name: String
});

db.connect(
  dbUri,
  {
    useMongoClient: true,
  },
  (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('connected to db!');
});
