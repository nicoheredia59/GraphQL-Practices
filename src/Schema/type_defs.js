const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [Users]
  }

  type Users {
    id: String
    name: String
    username: String
    email: String
  }
`;

module.exports = { typeDefs };
