const express = require('express');
const fs = require('fs');
const ws = require("ws"); 
const jade = require('pug');
const PythonShell = require('python-shell');
const path = require('path');
const config = require('./config.json');
const sassMiddleware = require('node-sass-middleware');
const userAgent = require('./user-agent.js');
const spawn = require('child_process').spawn;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3000;
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
const router = express.Router();
const metadata = require('gcp-metadata');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
//lmao
 /*use passportjs for login system it's super-duper easy */


//

//
/*var connection = mysql.createConnection({
	host     : 'sql202.epizy.com',
	user     : 'epiz_29883518',
	password : 'AxCTlOdn6hOyz',
	database : 'epiz_29883518_kicklet'
}) 
console.log('signed in!');

var getloginpage = app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/'));
});

app.post('/auth', function(req, res) {
	var username = req.body.username;
	var password = CryptoJS.MD5(req.body.password);
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/?loggedin=true');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});*/
// view engine setup

// Jade
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

/*app.use(sassMiddleware({
  src: path.join(__dirname, 'static'),
  dest: path.join(__dirname, 'static'),
  indentedSyntax: false, 	// true = .sass and false = .scss 
  // default is true
  sourceMap: true
}));*/
//Proxy stuff


///////////////////////////////////////

console.log('Hello I am trapped in this repl someone help please lol');

app.use(express.static('public'));
//handle static directory (cleaner look)
app.get('/', (req, res) => {
  res.render('index');

});
app.get("/market",(req, res) => {
  res.sendFile(__dirname + "/public/market.html")
});
app.get("/list",(req, res) => {
  res.sendFile(__dirname + "/public/list.html")
});
app.get("/about",(req, res) => {
  res.sendFile(__dirname + "/public/about.html")
});
app.get("/login",(req, res) => {
  res.sendFile(__dirname + "/public/login.html")
});
app.get("/cart",(req, res) => {
  res.sendFile(__dirname + "/public/cart.html")
});
app.get("/checkout",(req, res) => {
  res.sendFile(__dirname + "/public/checkout.html")
});
//BASE 
app.get("/index.html",(req, res) => {
  res.sendFile(__dirname + "/public/")
});
//Handle 404
app.get("*",(req,res) => {
    res.sendFile(__dirname + "/public/404.html")
});
app.get("/404.html",(req, res) => {
  res.sendFile(__dirname + "/public/errorfilenotfound")
});
/////////////////////
/*// Handle 404
app.use(function(req, res) {
 res.status(400);
res.render('404.pug', {title: '404: File Not Found'});
});*/

/*// Handle 500
app.use(function(error, req, res, next) {
  res.status(500);
res.render('500.jade', {title:'500: Internal Server Error', error: error});
});*/
// in close event we are sure that stream from child process is closed

// ...

// view engine setup


// ...




app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

