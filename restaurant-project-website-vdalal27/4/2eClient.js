var request = require('request');

let users = [{"Rname": "Ankita Rana", "Rpassword": "hjk", "user": "Vandana Dalal"},
			{"Rname": "Jake Ryan", "Rpassword": "tyu", "user": "Ankit Rana"},
			{"Rname": "Shikha Singla", "Rpassword": "oiy", "user": "Jake Ryan"},
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