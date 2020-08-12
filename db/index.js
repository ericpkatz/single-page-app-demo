const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize;
const conn = new Sequelize('postgres://localhost/acme_db');
const faker = require('faker');

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
  const promises = [];
  while(promises.length < 100){
    promises.push(
      User.create({
        name: faker.name.firstName(),
        isFavorite: faker.random.boolean()
      })
    );
  }

  await Promise.all(promises);
};


module.exports = {
  syncAndSeed,
  models: {
    User
  }
}
