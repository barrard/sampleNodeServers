var fs = require("fs");
var zlib = require('zlib');

// Create a readable stream
var readerStream = fs.createReadStream('input.txt')
// Compress the file input.txt to input.txt.gz
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("File Compressed.");

// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input.txt'));
  
// console.log("File Decompressed.");


// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");