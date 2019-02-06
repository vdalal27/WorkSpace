var request = require('request');

let users = [
			 {"name": "Vandana Dalal", "nickname": "Vanu", "password": "tyb"},
			 {"name": "Ankita Rana", "nickname": "Anku", "password": "hjk"},
			 {"name": "Jake Ryan", "nickname": "Jakey", "password": "tyu"},
			 {"name": "Shikha Singla", "nickname":"Shikhi", "password": "oiyi"}
			];

users.forEach(function(item, index){
	request.put({
		headers: {'content-type': 'application/json'},
		url: 'http://localhost:4444/register',
		body: JSON.stringify(item)
	}, 
	function(error, response, body){
		// var a = JSON.stringify(body);
		console.log(body);
		

	});
});