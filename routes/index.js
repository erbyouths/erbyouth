var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'erbyout 首页' });
});

/* GET home page. */
router.get('/landed', function(req, res, next) {
  res.render('landed', { title: 'erbyout landed' });
});

module.exports = router;
