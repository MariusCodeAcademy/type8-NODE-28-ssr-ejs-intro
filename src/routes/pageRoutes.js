const express = require('express');

const pageRoutes = express.Router();

const controller = require('../controllers/pageController');

pageRoutes.get('/', controller.showHomePage);
pageRoutes.get('/about', controller.showAboutPage);
pageRoutes.get('/contact', controller.showContactPage);

module.exports = pageRoutes;
