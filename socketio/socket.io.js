// Node.js - Express Framework

var http = require('http');
var express = require('express');
var socketio = require('socket.io')
var fs = require('fs');


var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(express.static(__dirname+'/client'));


io.on('connection', function (socket) {
	console.log('connection?? '+io.sockets.length)
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });

  	socket.on('chatEvent', function(data){
  		console.log('data from client')
  		console.log(data.message)
  		socket.broadcast.emit('broadcast', data.message)

  	})
  	socket.on('charge', function(data){
  		console.log(data.id+" : "+data.top+" top "+data.left+" left")
  		io.sockets.emit('charge', data)
  	})
});

app.get('/', function (req, res) {
	console.log('Request at current dirrectory '+__dirname)
	res.sendFile(__dirname+'/index.html')
})


app.get('/index2.html', function (req, res) {
   res.sendFile("index2.html" );
})

server.listen(8080, '10.134.5.193' function () {

console.log('server is on at http://10.134.5.193:8080')

})



// SN  REQUEST	Properties & Description
// 1	req.app 
// This property holds a reference to the instance of the express application that is using the middleware.
// 2	req.baseUrl 
// The URL path on which a router instance was mounted.
// 3	req.body 
// Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser
// 4	req.cookies 
// When using cookie-parser middleware, this property is an object that contains cookies sent by the request.
// 5	req.fresh 
// Indicates whether the request is "fresh." It is the opposite of req.stale.
// 6	req.hostname 
// Contains the hostname from the "Host" HTTP header.
// 7	req.ip 
// The remote IP address of the request.
// 8	req.ips 
// When the trust proxy setting is true, this property contains an array of IP addresses specified in the “X-Forwarded-For” request header.
// 9	req.originalUrl 
// This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes.
// 10	req.params 
// An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
// 11	req.path 
// Contains the path part of the request URL.
// 12	req.protocol 
// The request protocol string, "http" or "https" when requested with TLS.
// 13	req.query 
// An object containing a property for each query string parameter in the route.
// 14	req.route 
// The currently-matched route, a string.
// 15	req.secure 
// A Boolean that is true if a TLS connection is established.
// 16	req.signedCookies 
// When using cookie-parser middleware, this property contains signed cookies sent by the request, unsigned and ready for use.
// 17	req.stale 
// Indicates whether the request is "stale," and is the opposite of req.fresh.
// 18	req.subdomains 
// An array of subdomains in the domain name of the request.
// 19	req.xhr 
// A Boolean value that is true if the request’s "X-Requested-With" header field is “XMLHttpRequest”, indicating that the request was issued by a client library such as jQuery