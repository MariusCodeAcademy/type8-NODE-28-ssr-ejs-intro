const express = require('express');

const pageRoutes = express.Router();

const controller = require('../controllers/pageController')
// atkelti home, about, contact


pageRoutes.get('/', controller.showHomePage);

pageRoutes.get('/about', controller.showAboutPage);

pageRoutes.get('/contact', (req, res) => {
  const locals = {
    title: 'Contact Us',
    currentPage: 'contact',
  };
  // res.render('failo pavadinimas views directory be ejs', kintamuju objektas)
  res.render('contact', locals);
});

module.exports = pageRoutes;
