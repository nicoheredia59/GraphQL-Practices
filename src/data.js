const { default: axios } = require("axios");

const fetchData = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
  return resp.data;
};
const ApiData = fetchData();

module.exports = { ApiData };
