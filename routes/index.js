var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EFREI-CHINOIS' });
});

router.get('/clashOfClans', function(req, res, next){
	res.render('clashOfClans');
});

router.get('/clashOfClans/news', function(req, res, next){
	res.render('cocnews');
});

router.get('/clashOfClans/members', function(req, res, next){
	res.render('cocmembers');
});


module.exports = router;
