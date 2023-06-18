var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main Operating Page Router 
var db = require('./database')
var sampledataRouter = require('./routes/sample_data');
app.use('/sample_data', sampledataRouter);

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use( express.static( "public" ) );


// prepare server
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// index page
app.get('/', (req, res) => {
  res.render('page/index', {
    });
});


app.listen('3000', () => {
  console.log('App listening on port 3000! (enter "http://localhost:3000/")');
});


