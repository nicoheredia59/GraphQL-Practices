const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./Schema/type_defs");
const { resolvers } = require("./Schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Your api is running on port ${url}`);
});
