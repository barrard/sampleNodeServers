
var http = require("http");
var request = require("request");
var fs = require("fs");

const port = 8081

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");



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
