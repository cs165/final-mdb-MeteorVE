const bodyParser = require('body-parser');
const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const { DB_URL } = require('./config.json');

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;
async function main() {
  //const DATABASE_NAME = 'final-db';
  //const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
  
  const MONGO_URL = DB_URL;
  // The "process.env.MONGODB_URI" is needed to work with Heroku.
  db = await MongoClient.connect(process.env.MONGODB_URI || MONGO_URL);

  // The "process.env.PORT" is needed to work with Heroku.
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server listening on port ${port}!`);
};

main();


app.post('/record', (req, res) => {
  console.log(req.body);
  // const { name, time, content } = req.body;
  // if (!name || !time || !content) {
  //   res.sendStatus(403);
  // }
  db.collection('comments').save(req.body, (err, result) => {
    if (err) return res.sendStatus(500);
    console.log('saved to database')
    res.send(req.body);
  });
})

////////////////////////////////////////////////////////////////////////////////

// TODO(you): Add at least 1 GET route and 1 POST route.
