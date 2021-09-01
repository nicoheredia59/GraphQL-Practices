const { default: axios } = require("axios");
const { ApiData } = require("../data");

const resolvers = {
  Query: {
    users() {
      return ApiData;
    },
  },
};

module.exports = { resolvers };
