var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('private route hit');
		next();
	},
	logger: function(req,res,next){
		console.log(req.toString() + ' ' + new Date().toString());
		next();
	}
}

app.use(middleware.logger);

app.get('/about', function(req, res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('express server started at localhost:' + port);
});