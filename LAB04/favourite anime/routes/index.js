var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'favourite anime' });
});

router.get('/naruto', function(req, res, next) {
  res.render('naruto');
});

router.get('/haikyuu', function(req, res, next) {
  res.render('haikyuu');
});

router.get('/one_piece', function(req, res, next) {
  res.render('one_piece');
});


module.exports = router;
