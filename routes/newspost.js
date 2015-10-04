var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
	var newspost = req.body.newspost;
	console.log(newspost);
	//res.render('newspost', {newspost:newspost});
	var url = 'mongodb://localhost:27017/posts';
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected correctly to server.");
	  db.collection('postcon').insertOne({
	  	'post':newspost,
	  });
	  db.close();
	});
})

module.exports = router;