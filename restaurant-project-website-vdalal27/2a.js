var express = require("express");
var app = express();
app.use(express.json());
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/register', autoload: true});

app.put('/register',function(req,res){
    console.log(`body is ${JSON.stringify(req.body)}`);
	
    res.send(`<p> Hello </p>`);
})

const host = '127.0.0.13';
const port = '3764';
app.listen(port,host,function(){
    console.log("Listening on IPv4: " + host + " : " + port);
})

let user1 = {name: "Jane Smith", nickname:"Janey"};
let user2 = {name: "sayli Kotkar ", nickname:"Saylu"};
let user3 = {name: "Neha Kotkar ", nickname:"Nehu"};


db.insert([user1,user2,user3], function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
        console.log("Added " + newDocs.length + " docs");
    }
}); 

const request = require('request');

request.put({url:"http://127.0.0.13:3764/register", json: {name:"Jane Smith", nickname:"Janey"}},
    function(error,reponse,body){
        if(error){
            console.log('error', error);
            return;
        };
        console.log(JSON.stringify(body));
    }
)