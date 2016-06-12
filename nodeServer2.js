var http = require("http");
var request = require("request");
const port = 8082


request('http://localhost:8081/', function(err, res, body){
	if (err) {console.log(err)};
	console.log(body)
	console.log('request(localhost:8002/)')
})



http.createServer(function (req, res) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   res.end('you said what?' + req.body +' '+req.headers);
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+port+'/');
