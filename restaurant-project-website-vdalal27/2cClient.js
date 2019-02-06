var request = require('request');

	request.get({
		headers: {'content-type': 'application/json'},
		url: 'http://localhost:4444/allUsers',
	}, 
	function(error, response, body){
		console.log(body);

	});
