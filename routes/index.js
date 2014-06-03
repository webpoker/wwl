var express = require('express');
var router = express.Router();
var auth = require('../controller/auth');

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
router.get('/admin', function(req, res){
	var isValid = auth.checkLogin(req);
	if(isValid)
		res.render('admin/index');
	else
		res.render('admin/login');
});
router.get('/admin/login', function(req, res) {
  res.render('admin/login', { title: 'Express' });
});
router.get('/admin/goods/:id?', function(req, res){
	var isValid = auth.checkLogin(req);
	if(isValid)
		res.render('admin/goods');
	else
		res.render('admin/login');
});
router.post('/admin/login', function(req, res){
	console.log(1)
	if(!req.body.username || !req.body.password)
		res.redirect('/admin/login');
	console.log(2);
	auth.login(req.body.username, req.body.password, req, function(){
		console.log(3);
		res.redirect('/admin');
	});
});


module.exports = router;
