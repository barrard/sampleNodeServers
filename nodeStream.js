var fs = require("fs");
var data = 'READING A STREAM IS SO EASY!!!!!!!!!!!\n';
// Reading from stream
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
	console.log('data+=chunk')
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data+'\n end of data ~~~~~~~~~[CHUNK?]');
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

// Writing to stream
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
var wdata = 'My Teeth are going to fall out!\n';
// Write the data to stream with encoding to be utf8
writerStream.write(wdata,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");