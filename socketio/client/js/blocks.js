$('.box').on('click', function(){
	console.log($(this).attr('id'))
	console.log($(this).offset().top)
	console.log($(this).offset().left)
	var id = $(this).attr('id')
	var top = $(this).offset().top
	var left = $(this).offset().left
	top +=1
	left+=20
	$(this).offset({top:top, left:left})
	socket.emit('charge', {
		id:id,
		top:top,
		left:left
	})
})

socket.on('charge', function(data){
	console.log('got a charge from server')
	console.log(data)
	$('#'+data.id).offset({top:data.top, left:data.left})
})