var request = require("request");
var jar1 = request.jar();
request = request.defaults({jar:jar1});

request.get({
	url: 'http://localhost:7777/',

}, function(error,response,body){
	if(error){
		console.log("error", error);
		return;
	}
	console.log(jar1.getCookieString("http://localhost:7777/"));
});


request.get({
	url: 'http://localhost:7777/department',

}, function(error,response,body){
	if(error){
		console.log("error", error);
		return;
	}
	console.log(jar1.getCookieString("http://localhost:7777/department"));
});

request.get({
	url: 'http://localhost:7777/display',

}, function(error,response,body){
	if(error){
		console.log("error", error);
		return;
	}
	console.log(jar1.getCookieString("http://localhost:7777/display"));
});