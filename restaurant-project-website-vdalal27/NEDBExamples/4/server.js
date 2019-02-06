const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/register', autoload: true});
var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var request = require('request');
app.use(express.static('public'));
const argon2 = require('argon2');
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
				argon2
				  .hash(info.password)
				  .then(hash => {
				   console.log(`Password hash: ${hash}`);
				   info.password = hash;
  })
				db.insert(info, function(err, newDocs) {
	
				if (err) {
					console.log(err);
					
					// res.send(jsonResponse);
					
				} else {
						
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

	let info = req.body;
	console.log(info.name);

	db.find({"name": info.Rname}, function(err, docs) {

		console.log(docs);
		hash = docs[0].password;
		argon2.verify(hash, password)
		if (match) {
			db.find({}, function(err, docs) {

					if (err) {
					console.log(err);
						
					}
					 else {
						var usr = [];
						for (i of docs){
							usr.push(i.name);
						res.json({"user": info.user, "password": usr});
						return; 
			    						  } 
			
							}
	
				});

		}


	
	else
	{
		console.log("Error, No match");
	}
	
});
});	

app.get('/nickname', function(req, res){

let info = req.body;
	db.find({"name": info.Rname}, function(err, docs) {
		hash = docs[0].password;
		argon2.verify(hash, password)	
		if (match) {
			db.find({}, function(err, docs) {
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
			}	
	else
	{
		console.log("Error, No match");
	}
});
	
});


app.listen(4440, function() {
  console.log("cookieExample listening on port 4440!");
});

