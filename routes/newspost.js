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
		docs = 'nihao';
		dbQuery(db, function(docs){
			docs.toArray(function(err, docs) {
			    assert.equal(err, null);
			    console.log("Found the following records");
			    console.dir(docs);
			    res.status(200).render('newspost', {newspost:docs, title:'New Posts'});
			  });
		});

		console.log(docs);
	});



	//module thought here, you made a module and use it as a callback;
	//res.sendStatus(200);
	
});

var dbQuery = function(db, callback){
	var posts = db.collection('postcon').find();
	callback(posts);
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
	  	'time_added':Date(),
	  });
	  db.close();
	});
	res.send('success');
})

module.exports = router;