const { makeExecutableSchema } = require('graphql-tools');
const { ApolloServer, gql } = require('apollo-server');
const db = require('../db.js');
const fs = require('fs');
const path = require('path');

const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'));

const resolvers = {
  Query: {
    customers: () => db.customers,
    accounts: () => db.accounts,
    transactions: () => db.transactions,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}); 