const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/register', autoload: true});
var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var request = require('request');
app.use(express.static('public'));

app.use(express.json());
app.use(bodyParser.json());


// Get all the documents in the database
// let jsonResponse = {};
app.put('/register', function(req, res){
	let info = req.body;
	// console.log("put register", JSON.stringify(info));
	console.log(info.name);
	// res.json({msg: "to be written"});
	// return;
	// jsonResponse.user = info.name;
	db.find({"name": info.name}, function(err, docs) {

		if(err) {
			//resp.reason = "couldn't find the entry";
			// jsonResponse.reason = "No such entry in db";
			console.log("Something went wrong when writing");
			console.log(err);
		} else {
				if (docs.length == 0){

				db.insert(info, function(err, newDocs) {
	
				if (err) {
					console.log(err);
					
					// res.send(jsonResponse);
					
				} else {
						console.log("Added " + newDocs.length + " docs");
						console.log("Success");
						res.json({"registration": "succeeded", "user": info.name});
						return;
						// res.send(jsonResponse);
					
				// console.log("We found " + docs.length + " documents");
				// console.log(docs);

				}
			});

		}
		else{
			res.json({"registration":"failed", "reason": "Entry already in database"});
					return;
				// res.json({"registration":"failed", "reason": "Cannot put in db"});
				// return;
			}
		
			
		}
	});

	
});

app.get('/allUsers', function(req, res){
var ndate = new Date();	

	db.find({}, function(err, docs) {

				if (err) {
					console.log(err);
					
				} else {
						var usr = [];
						for (i of docs){
							usr.push(i.name);
								
						}
		
				res.json({"date": ndate, "user": usr});
				return;
			
				}
	
});
	
});

app.get('/nickname', function(req, res){

let info = req.body;
	db.find({"name": info.user}, function(err, docs) {
			

				if (err) {
					console.log(err);
					
				} else {
						if (docs.length == 0){		
							res.json({"user": info.user, "error": "Not Found"});
						return;
						}
						else{
							res.json({"user": info.user, "nickname": docs[0].nickname});
							
						}
		
				
			
			}	
	
});
	
});


app.listen(4444, function() {
  console.log("cookieExample listening on port 4444!");
});

