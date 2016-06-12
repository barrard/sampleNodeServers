
var http = require("http");
var request = require("request");
var fs = require("fs");
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Bind event and even handler as follows
//eventEmitter.on('eventName', eventHandler);
// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
     // Fire the data_received event 
      eventEmitter.emit('data_received');
   }

// Fire an event 
//eventEmitter.emit('eventName');

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

setTimeout(function(){
// Fire the connection event 
eventEmitter.emit('connection');
console.log("Program Ended.");
}, 2000)

const port = 8081

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
	console.log("Program Ended");
});


// request('http://localhost:8083/', function(err, res, body){
// 	if (err) {console.log(err)};
// 	console.log(body)
// 	console.log('request(localhost:8002/)')
// })


http.createServer(function (req, res) {
	req.on('data', function(){console.log(req)})
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   res.end('Hello World\n');
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+port+'/');
