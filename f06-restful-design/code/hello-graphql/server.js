const { graphql } = require('graphql');
const carSchema = require('./car-schema');

const root = {
  name: () => 'Tesla!',
  model: () => 'X',
  year: () => 1995,
};

graphql(
  carSchema,
  '{ name, year }',
  root
).then(response => {
  console.log(response);
});
