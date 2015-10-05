var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/posts';
/* GET users listing. */
router.get('/', function(req, res, next) {
	jsonOut = '';
	MongoClient.connect(url, function(err, db){
		/*var posts = db.collection('postcon').find();
		posts.each(function(err, doc) {
		      assert.equal(err, null);
		      if (doc != null) {
		      	jsonOut += doc;
		      	test = 'test';
		      } ;
		});*/
		docs = 'nihao';
		dbQuery(db, function(doc){
			docs = docs + doc;
			console.log(docs);
		});

		console.log(docs);
	});



	//module thought here, you made a module and use it as a callback;

	res.render('newspost', {newspost:'news'});
});

var dbQuery = function(db, callback){
	var posts = db.collection('postcon').find();
	posts.each(function(err, doc){
		assert.equal(err, null);
		if (doc != null) {
			callback(doc);
		};
	});
}

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