const express = require('express');

const bookRoouter = express.Router();
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

bookRoouter.route('/')
  .get((req, res) => {
    res.render('booklistview',
      {
        nav: [{ link: '/book1', title: 'book 1' },
          { link: '/book2', title: 'Book 2' }],
        title: 'Books',
        books
      });
  });

bookRoouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render('bookview',
      {
        nav: [{ link: '/book1', title: 'book 1' },
          { link: '/book2', title: 'Book 2' }],
        title: 'Books',
        book: books[id]
      });
  });

module.exports = bookRoouter;
