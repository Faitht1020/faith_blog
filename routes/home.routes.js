const express = require('express');
const router = express.Router();
//requiring controller in the route file
const newsController = require('../controllers/news.controller')
const checkNumber = require('../Middleware/news.middleware')

router.post('/create', checkNumber, newsController.create) ;
router.put("/update/:postId" ,  newsController.update);
router.get('/read', newsController.read);
router.delete("/delete/:postId" ,  newsController.delete);

module.exports = router;