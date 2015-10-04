var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/posts';
/* GET users listing. */
router.get('/', function(req, res, next) {
	var jsonOut = '';
	MongoClient.connect(url, function(err, db){
		var posts = db.collection('postcon').find();
		posts.each(function(err, doc) {
		      assert.equal(err, null);
		      if (doc != null) {
		      	jsonOut += doc;
		      } ;
		});
	});

	console.log(jsonOut);

	res.render('newspost', {newspost:'news'});
});

router.post('/', function(req, res, next){
	var newspost = req.body.newspost;
	console.log(newspost);
	//res.render('newspost', {newspost:newspost});
	
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