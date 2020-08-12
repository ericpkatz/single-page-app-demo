const axios = require('axios');
const { render } = require('./renderer');

const init = async()=> {
  const response = await axios.get('/api/users');
  const users = response.data;
  render(users);
};

init();
