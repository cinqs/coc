var express = require('express');
var router = express.Router();
var member=require('member');

router.get('/', function(req, res, next){
	member('read', '', function(data){
		res.render('members', {members:data});
	})
});

router.post('/', function(req, res, next){
	var name = req.body.name;
	var gender = req.body.gender;
	var age = req.body.age;
	var tel = req.body.tel;
	var json = [{
		'name' : name,
		'gender' : gender,
		'age' : age,
		'tel' : tel
	}];

	member('create', json, function(data){
		res.render('members', {members:data})
	})
})

module.exports = router;