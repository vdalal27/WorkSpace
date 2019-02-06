/*
Simple demonstration of cookie use via a bad weather, tide, and wind site.
*/
var express = require("express");
var app = express();
app.use(express.static("public")); // For static assets
app.use(express.urlencoded({extended:false})); // Body form processing
var cookieParser = require("cookie-parser"); // For cookies
app.use(cookieParser());


app.get("/", function(req, res) {
  res.cookie('general','general_cookie' , {path: "/"});
  res.cookie('depr', "something", {path:"/department"});
  res.cookie('displ', "something_else", {path:"/display"});
  console.log("Cookies: ", JSON.stringify(req.cookies));
  res.send(`path /, cookies; ${JSON.stringify(req.cookies)}`);
  
});

app.get("/department", function(req, res) {
  console.log("Cookies: ", req.cookies);
  console.log("Cookies: ", JSON.stringify(req.cookies));
  res.send(`path /department, cookies; ${JSON.stringify(req.cookies)}`);
});

app.get("/display", function(req, res) {
  console.log("Cookies: ", req.cookies);
  console.log("Cookies: ", JSON.stringify(req.cookies));
  res.send(`path /display, cookies; ${JSON.stringify(req.cookies)}`);
});

app.listen(7777, function() {
  console.log("cookieExample listening on port 7777!");
});
