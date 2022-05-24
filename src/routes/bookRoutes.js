const express = require('express');
const { getAllBooks, addBook } = require('../model/bookModel');

const bookRoutes = express.Router();

// GET /books - render books page - sukurti ir atvaizduoti books.ejs
bookRoutes.get('/books', async (req, res) => {
  let allBooksArr;
  let feedback;
  try {
    allBooksArr = await getAllBooks();
  } catch (error) {
    console.log(error);
    feedback = 'Something went wrong';
  }

  const locals = {
    currentPage: 'books',
    title: 'Books',
    allBooksArr,
    feedback,
  };
  res.render('books', locals);
});

// GET /books/new - render new-book.ejs kuriame yra forma sukurti naujai knygai
bookRoutes.get('/books/new', async (req, res) => {
  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
  }
  res.render('new-book', locals);
})

// GET /books/new - creates new book from given data

// POST /books/new - render new-book.ejs pass feedback and display feedback

// POST /books/new - res.json('trying to create a new book')
bookRoutes.post('/books/new', async (req, res) => {
  
  console.log('req.body ===', req.body);
  const {title, author, year, category} = req.body;
  const result = await addBook(title, author, year, category)
  console.log('result ===', result);
  const feedback = result.affectedRows === 1 ? 'Success' : 'Error'

  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
    feedback,
  }
  res.render('new-book', locals);
  // res.redirect('/books')
})

module.exports = bookRoutes;
