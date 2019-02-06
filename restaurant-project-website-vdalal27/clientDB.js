var request = require('request');

let users = [{"name": "Jane Smith", "nickname": "Janey"},
			 {"name": "Vandana Dalal", "nickname": "Vanu"},
			 {"name": "Ankita Rana", "nickname": "Anku"},
			 {"name": "Jake Ryan", "nickname": "Jakey"},
			 {"name": "Shikha Singla", "nickname":"Shikhi"}
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