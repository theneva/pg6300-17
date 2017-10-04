const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    name: String,
    model: String,
    year: Int,
  }
`);
