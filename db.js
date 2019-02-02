var MongoClient = require('mongodb').MongoClient;

const db = {};

db.MongoClient = new MongoClient('mongodb://localhost:27017/todo');

db.MongoClient.connect((err, client) => {
  if (err) throw err;
  db.database = client.db('todo'); 
});

module.exports = db;