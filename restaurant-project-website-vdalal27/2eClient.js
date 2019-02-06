var request = require('request');

let users = [{"user": "Jane Smith"},
			 {"user": "Vandana Dalal"},
			 {"user": "Jaya Sachdeva"}
			];

users.forEach(function(item, index){
	request.get({
		headers: {'content-type': 'application/json'},
		url: 'http://localhost:4444/nickname',
		body: JSON.stringify(item)
	}, 
	function(error, response, body){
		// var a = JSON.stringify(body);
		console.log(body);
		

	});
});