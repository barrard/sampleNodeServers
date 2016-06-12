var http = require('http')
var fs = require('fs')
var path = require('path')
var net = require('net')

var serverHttp = http.createServer()
var serverHttp2 = http.createServer()

var serverNet =   net.createServer(function(sock){
	console.log(sock)
})

serverHttp.on('connection', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('okay');
	console.log(req.url+' Connection')


	//req.pipe(fs.createWriteStream(path.join(__dirname+'/output.txt')))
	console.log('Got a hit?1')
	//serverHttp.emit('hit')
})

serverHttp2.on('connection', function(req, res){
	// res.writeHead(200)
	console.log(req.url+' Connection')


	//req.pipe(fs.createWriteStream(path.join(__dirname+'/output.txt')))
	console.log('Got a hit?2')
	serverHttp2.emit('hit')
})


serverNet.on('connection', function(req, res){
	// res.writeHead(200)
	console.log(req.url+' Connection')


	//req.pipe(fs.createWriteStream(path.join(__dirname+'/output.txt')))
	console.log('Got a net socket???')
	//var head = req.headers()
	//console.log(req)
	serverHttp.emit('hit')
})

// server.on('data', function  (data) {
// 	req.pipe(fs.createWriteStream(__dirname+'/output.txt'))

// 	console.log(data)
// 	console.log('data')
// })






serverHttp.listen(3000)
serverHttp2.listen(3001)
serverNet.listen(3002)
console.log('im an http server')