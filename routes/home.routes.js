const express = require('express');
const router = express.Router();
//requiring controller in the route file
const newsController = require('../controllers/news.controller')
const checkNumber = require('../Middleware/news.middleware')

router.get('/create', checkNumber, newsController.create) 

module.exports = router;