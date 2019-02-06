var request = require('request');

request.get({
	url: 'http://localhost:7777/',

}, function(error,response,body){
	if(error){
		console.log("error", error);
		return;
	}
	console.log(JSON.stringify(body));
});


request.get({
	url: 'http://localhost:7777/department',

}, function(error,response,body){
	if(error){
		console.log("error", error);
		return;
	}
	console.log(JSON.stringify(body));
});

request.get({
	url: 'http://localhost:7777/display',

}, function(error,response,body){
	if(error){
		console.log("error", error);
		return;
	}
	console.log(JSON.stringify(body));
});