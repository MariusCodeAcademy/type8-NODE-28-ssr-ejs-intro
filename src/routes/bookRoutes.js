const express = require('express');
const controller = require('../controllers/bookController');

const bookRoutes = express.Router();

bookRoutes.get('/books', controller.showBooksPage);
bookRoutes.get('/books/new', controller.showNewBookForm);
bookRoutes.post('/books/new', controller.processBooksForm);

module.exports = bookRoutes;

// POST /books/new
// validage req.body
// title - string, min 3, privalomas
// author - string, min 3, privalomas
// year - number, 4 skaiciai, min 1900, max 2030, privalomas
// category - number, 1 skaicius, min 1, max 5, privalomas
