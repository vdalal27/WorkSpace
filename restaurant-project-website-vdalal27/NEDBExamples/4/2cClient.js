var request = require('request');
let arr = [
			{"Rname": "Ankita Rana", "Rpassword": "hjk"},
			{"Rname": "Jake Ryan", "Rpassword": "tyu"},
			{"Rname": "Shikha Singla", "Rpassword": "oiy"},
		]
	request.get({
		headers: {'content-type': 'application/json'},
		url: 'http://localhost:4440/allUsers',
	}, 
	function(error, response, body){
		console.log(body);

	});
