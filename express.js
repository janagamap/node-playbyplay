var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true;
}));

/*
app.get('/', function(req, res){
	//res.send('Hello World!');
	res.json({hello  :'world'});
});
*/

var cats = require('./cats.js')(app);

var server = app.listen(3000, function(){
	console.log('Server running at htpp://127.0.0.1:3000/');
});