const bodyParser = require('body-parser');
const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const { DB_URL } = require('./config.json');

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;
let MONGO_URL = DB_URL;
async function main() {
  //const DATABASE_NAME = 'final-db';
  //const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
  
  // The "process.env.MONGODB_URI" is needed to work with Heroku.
  // db = await MongoClient.connect(process.env.MONGODB_URI || MONGO_URL);

  //const db = new MongoClient(process.env.MONGODB_URI || MONGO_URL, { useNewUrlParser: true });
  // db.connect(err => {
  //   const collection = client.db("final").collection("");
  //   // perform actions on the collection object
  //   client.close();
  // });

  // The "process.env.PORT" is needed to work with Heroku.
  const port = process.env.PORT || 9000;
  await app.listen(port);
  console.log(`Server listening on port ${port}!`);
};

main();


app.post('/record', jsonParser, (req, res) => {
  console.log(req.body);
  console.log(DB_URL);
  
  MongoClient.connect(MONGO_URL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("final");
    dbo.collection("record").insertOne(req.body, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  // db.collection('record').save(req.body, (err, result) => {
  //   console.log(err);
  //   if (err) return res.sendStatus(500);
  //   res.send(req.body);
  // });
})

////////////////////////////////////////////////////////////////////////////////

// TODO(you): Add at least 1 GET route and 1 POST route.

app.get('/record', jsonParser, (req, res) => {
  //console.log(req.body);
  MongoClient.connect(MONGO_URL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("final");
    var mysort = { product: 1 , case: 1};
    dbo.collection("record").find().sort(mysort).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      //res.send(req.body)
      db.close();
      
      res.send({ data: result });
      //console.log(res);
    });
  });
})

app.delete('/record', jsonParser, (req, res) => {
  //console.log(req.body);
  MongoClient.connect(MONGO_URL, function (err, db) {
    if (err) throw err;
    var dbo = db.db("final");
    var myquery = {};
    dbo.collection("record").deleteMany(myquery, function (err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      res.send("delete success");
      db.close();
    });
  });
})