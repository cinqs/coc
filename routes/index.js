var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/clashOfClan', function(req, res, next){
	res.render('clashOfClans');
});
module.exports = router;
