var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', {
    title: 'erbyouth 后台页'
  })
});

// 后台编辑
router.get('/blog', function(req, res, next) {
  res.render('admin', {
    title: 'erbyouth 后台页1'
  })
});

module.exports = router;
