// Method 1
// Following is the syntax to create an uninitiated Buffer of 10 octets:



var buf = new Buffer(10);

// Method 2
// Following is the syntax to create a Buffer from a given array:

var buf = new Buffer([10, 20, 30, 40, 50]);


// Method 3
// Following is the syntax to create a Buffer from a given string and optionally encoding type:

var buf = new Buffer("Simply Easy Learning", "utf-8");
//buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len); //20

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 99;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde


var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);



// Compare Buffers
// Syntax
// Following is the syntax of the method to compare two Node buffers:

// buf.compare(otherBuffer);
// Parameters
// Here is the description of the parameters used:

// otherBuffer - This is the other buffer which will be compared with buf

// Return Value
// Returns a number indicating whether this comes before or after or is the same as the otherBuffer in sort order.



var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

// Parameters
// Here is the description of the parameters used:

// targetBuffer - Buffer object where buffer will be copied.

// targetStart - Number, Optional, Default: 0

// sourceStart - Number, Optional, Default: 0

// sourceEnd - Number, Optional, Default: buffer.length

// Return Value
// No return value. Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.

var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());


// Slice Buffer
// Syntax
// Following is the syntax of the method to get a sub-buffer of a node buffer:

// buf.slice([start][, end])
// Parameters
// Here is the description of the parameters used:

// start - Number, Optional, Default: 0

// end - Number, Optional, Default: buffer.length

// Return Value
// Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.

// Example
var buffer1 = new Buffer('TutorialsPoint');
//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());


// Buffer Length
// Syntax
// Following is the syntax of the method to get a size of a node buffer in bytes:

// buf.length;
// Return Value
// Returns a size of buffer in bytes.

// Example
var buffer = new Buffer('TutorialsPoint');
//length of the buffer
console.log("buffer length: " + buffer.length);