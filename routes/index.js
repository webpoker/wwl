var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/product', function(req, res) {
  res.render('category', { title: 'Express' });
});
router.get('/product/id', function(req, res) {
  res.render('product', { title: 'Express' });
});


module.exports = router;
