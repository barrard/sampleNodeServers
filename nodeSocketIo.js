var http = require('http')
var socketio = require('socket.io')
var fs = require('fs')

var requestHandler = function(req, res){
	fs.readFile(__dirname+'/index.html', function(err, data){
		if (err) {
			res.writeHead(500)
			return res.end('Error loading index.html')
		}else{
			res.writeHead(200)
			res.end(data)
		}
	})

}

var server = http.createServer(requestHandler)
var io = socketio.listen(server)

server.on('request', function(){
	console.log('Request made?')
})
server.on('connection', function(){
	console.log('connection made?')
})
server.on('end', function(){
	console.log('end made?')
})

io.sockets.on('connection', function(socket){
	console.log(io.sockets.length+' users connected')
	// setInterval(function(){
	// 	var timeStamp = Date.now()
	// 	console.log('emitted: '+timeStamp)
	// 	socket.emit('timer', timeStamp)
	// }, 2000)
	socket.on('submit', function(data){
		console.log('Data has been submited '+data)
		socket.emit('chatUpdate', data)
	})
})
var port = 8080
server.listen(port)

console.log('Server is going on '+port)