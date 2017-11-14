var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Person {
    name: String,
    age: Int,
  }

  type Query {
    people(ageLimit: Int): [Person],
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  people: ({ ageLimit }) => {
    const people = [
      { name: 'Elend', age: 27 },
      { name: 'Vin', age: 24 },
    ];

    if (ageLimit == null) {
      return people;
    }

    return people.filter(person => person.age > ageLimit);
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
