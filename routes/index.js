var express = require('express');
// var blog = require('./models/blog');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	 // blog.fetch(function(obj) {
		 res.render('index', { title: 'erbyout 首页'});
 
	 	// });

});

/* GET home page. */
router.get('/landed', function(req, res, next) {
  res.render('landed', { title: 'erbyout landed' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: '关于页面' });
});


router.get('/student', function(req, res, next) {
  res.render('student', { title: '学习历程' });
});


module.exports = router;
