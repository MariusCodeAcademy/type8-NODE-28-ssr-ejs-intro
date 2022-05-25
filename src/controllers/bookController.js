const { addBook, getAllBooks } = require('../model/bookModel');

const showBooksPage = async (req, res) => {
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
};
const showNewBookForm = async (req, res) => {
  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
  };
  res.render('new-book', locals);
};
const processBooksForm = async (req, res) => {
  console.log('req.body ===', req.body);
  const {
    title, author, year, category,
  } = req.body;
  const result = await addBook(title, author, year, category);
  console.log('result ===', result);
  const feedback = result.affectedRows === 1 ? 'Success' : 'Error';

  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
    feedback,
  };
  res.render('new-book', locals);
  // res.redirect('/books')
};

module.exports = {
  showBooksPage,
  showNewBookForm,
  processBooksForm,
};
