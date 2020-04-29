const express = require('express');
const { mongoclient } = require('mongodb');
const debug = require('debug')('app:adminroutes');

const adminrouter = express.Router();
const books = [
  {
    title: 'bla',
    author: 'ha'
  },
  {
    title: 'aaa',
    author: 'ss'
  },
  {
    title: 'aqa',
    author: 'qq'
  },
  {
    title: 'www',
    author: 'cc'
  }
];

function router() {
  adminrouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbname = 'libraryapp';
      (async function mongo() {
        let client;
        try {
          client = await mongoclient.connect(url);
          debug('connected to the server');

          const db = client.db(dbname);
          const response = await db.collection('books').insertMany(books);
          res.json(response);
        }
        catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  return adminrouter;
}

module.exports = router;
