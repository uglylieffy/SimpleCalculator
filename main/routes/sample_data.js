var express = require('express');

var router = express.Router();

var database = require('../database');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// display all equation data 
router.get("/", function(request, response, next){
	var query = "SELECT * FROM history";
	database.query(query, function(error, data){
		if (error) throw error; 
		else
		{
			response.render('sample_data', {title:'Node.js MySQL CRUD Application', action:'list', hisData:data});
		}
	});

});


// insert new equation to SQL db 
router.post("/add_sample_data", function(request, response, next){
    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
	console.log(date)
	var equation = request.body.answ;
	console.log(equation)
    var query = `INSERT INTO history VALUES ("${date}", "${equation}")`;
	database.query(query, function(error, data){
		if (error) throw error; 	
		else {response.redirect("/sample_data");}
	});
});


module.exports = router;