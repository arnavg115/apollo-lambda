// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: HelloType
  }
  type HelloType {
    name: String
    num: Int
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return {
        name: "s",
        num: 4,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler();
