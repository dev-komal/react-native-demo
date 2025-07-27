const jsonGraphqlServer = require('json-graphql-server');
const data = require('./db.js');
const express = require('express');

const app = express();
app.use('/graphql', jsonGraphqlServer.default(data));
app.listen(4000);
console.log("Mock GraphQL API running at http://localhost:4000/graphql");
