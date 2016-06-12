  var socket = io.connect();
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

  socket.on('broadcast', function(data){
  	console.log('Data from server')
  	console.log(data.message)
  })


  	$('#submit').on('click',   function (){
  		console.log($('#data').val()+' data sent to server')
  		socket.emit('chatEvent',{
  			message:$('#data').val()	
  		}) 
  })