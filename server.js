const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { User } = db.models;


app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/users', async(req, res, next)=> {
  try {
    const users = await User.findAll();
    res.send(users);
  }
  catch(ex){
    next(ex);
  }
});


const port = process.env.PORT || 3000;

const init = async()=> {
  try {
    await db.syncAndSeed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();
