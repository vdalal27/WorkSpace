/*
    An example from https://www.npmjs.com/package/express-session
    to demonstrate basic request-session capability.
*/

var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
var app = express();
 
app.use(session({ // Applies session middleware to every request
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
 
app.use(function (req, res, next) { // Applies this user defined middleware to every request
  // This middleware initializes session storage and does page visit counting.
  console.log(`session object: ${JSON.stringify(req.session)}`);
  console.log(`session id: ${req.session.id}`);
  if (!req.session.views) { //the session middleware attaches a session object to the request
    req.session.views = {}; // We can add anything we like to the session object
  }                         // including another object called *views*. The middleware will store this for us.
  // Page visit tracking implemented below
  // get the url pathname
  var pathname = parseurl(req).pathname;
  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  next()
})
 
app.get('/foo', function (req, res, next) {
  // Session object is recovered from storage for us by the session middleware
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})
 
app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

const host = '127.0.0.1';
const port = '5555';
app.listen(port, host, function () {
    console.log("expressSessionExample.js app listening on IPv4: " + host +
	":" + port);
});