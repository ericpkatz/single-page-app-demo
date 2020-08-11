const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize;
const conn = new Sequelize('postgres://localhost/acme_db');

const User = conn.define('user', {
  name: {
    type: STRING
  },
  isFavorite: {
    type: BOOLEAN,
    defaultValue: false
  }
});


const syncAndSeed = async()=> {
  await conn.sync({ force: true });
};


module.exports = {
  syncAndSeed,
  models: {
    User
  }
}
