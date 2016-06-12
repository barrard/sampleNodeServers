var exports = module.exports = {};

var fs = require("fs");

// Asynchronous read
exports.asyncRead = function(input){
	fs.readFile(input, function (err, data) {
	   if (err) {
	       return console.error('readFileError '+err);
	   }
	   console.log("Asynchronous read: " + data.toString());
	});

	// Synchronous read
	var data = fs.readFileSync('input.txt');
	console.log("Synchronous read: " + data.toString());

	console.log("Program Ended");
}

//asyncRead('input.txt')

// Open a File
// Syntax
// Following is the syntax of the method to open a file in asynchronous mode:

// fs.open(path, flags[, mode], callback)
// Parameters
// Here is the description of the parameters used:

// path - This is string having file name including path.

// flags - Flag tells the behavior of the file to be opened. All possible values have been mentioned below.

// mode - This sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.

// callback - This is the callback function which gets two arguments (err, fd).

// Flags
// Flags for read/write operations are:

// Flag	Description
// r	Open file for reading. An exception occurs if the file does not exist.
// r+	Open file for reading and writing. An exception occurs if the file does not exist.
// rs	Open file for reading in synchronous mode.
// rs+	Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
// w	Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// wx	Like 'w' but fails if path exists.
// w+	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
// wx+	Like 'w+' but fails if path exists.
// a	Open file for appending. The file is created if it does not exist.
// ax	Like 'a' but fails if path exists.
// a+	Open file for reading and appending. The file is created if it does not exist.
// ax+	Like 'a+' but fails if path exists.


// Asynchronous - Opening File
 exports.asyncOpen = function(input){
	console.log("Going to open file!");
	fs.open(input, 'w', function(err, fd) {
	   if (err) {
	       return console.error(err);
	   }
	  console.log("File opened successfully!");     
	});
}

//asyncOpen('input.txt')



// Get File information
// Syntax
// Following is the syntax of the method to get the information about a file:

// fs.stat(path, callback)
// Parameters
// Here is the description of the parameters used:

// path - This is string having file name including path.

// callback - This is the callback function which gets two arguments (err, stats) where stats is an object of fs.Stats type which is printed below in the example.

// Apart from the important attributes which are printed below in the example, there are number of useful methods available in fs.Stats class which can be used to check file type. These methods are given in the following table.

// Method	Description
// stats.isFile()	Returns true if file type of a simple file.
// stats.isDirectory()	Returns true if file type of a directory.
// stats.isBlockDevice()	Returns true if file type of a block device.
// stats.isCharacterDevice()	Returns true if file type of a character device.
// stats.isSymbolicLink()	Returns true if file type of a symbolic link.
// stats.isFIFO()	Returns true if file type of a FIFO.
// stats.isSocket()	Returns true if file type of asocket.

 exports.getFileInfo = function(input){
	console.log("Going to get file info!");
	fs.stat(input, function (err, stats) {
	   if (err) {
	       return console.error(err);
	   }
	  // console.log(stats);
	   console.log("Got file info successfully!");
	   
	   // Check file type
	   console.log("isFile ? " + stats.isFile());
	   console.log("isDirectory ? " + stats.isDirectory());    
	});
}

//getFileInfo('input.txt')


// Writing File
// Syntax
// Following is the syntax of one of the methods to write into a file:

// fs.writeFile(filename, data[, options], callback)
// This method will over-write the file if file already exists. If you want to write into an existing file then you should use another method available.

// Parameters
// Here is the description of the parameters used:

// path - This is string having file name including path.

// data - This is the String or Buffer to be written into the file.

// options - The third parameter is an object which will hold {encoding, mode, flag}. By default encoding is utf8, mode is octal value 0666 and flag is 'w'

// callback - This is the callback function which gets a single parameter err and used to to return error in case of any writing error.

exports.writeFile = function(input){
	console.log("Going to write into existing file");
	fs.writeFile(input, 'Simply Easy Learning!',  function(err) {
	   if (err) {
	       return console.error(err);
	   }
	   console.log("Data written successfully!");
	   console.log("Let's read newly written data");
	   fs.readFile(input, function (err, data) {
	      if (err) {
	         return console.error(err);
	      }
	      console.log("Asynchronous read: " + data.toString());
	   });
	});
}

//writeFile('input.txt')

// Reading File
// Syntax
// Following is the syntax of one of the methods to read from a file:

// fs.read(fd, buffer, offset, length, position, callback)
// This method will use file descriptor to read the file, if you want to read file using file name directly then you should use another method available.

// Parameters
// Here is the description of the parameters used:

// fd - This is the file descriptor returned by file fs.open() method.

// buffer - This is the buffer that the data will be written to.

// offset - This is the offset in the buffer to start writing at.

// length - This is an integer specifying the number of bytes to read.

// position - This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.

// callback - This is the callback function which gets the three arguments, (err, bytesRead, buffer).

 exports.readBuffer = function(input){
	var buf = new Buffer(1024);

	console.log("Going to open an existing file");
	fs.open(input, 'r+', function(err, fd) {
	   if (err) {
	       return console.error('OPEN ERROR '+err);
	   }
	   console.log("File opened successfully!");
	   console.log("Going to read the file");
	   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
	      if (err){
	         console.log('READ ERR '+err);
	      }
	      console.log(bytes + " bytes read");
	      
	      // Print only read bytes to avoid junk.
	      if(bytes > 0){
	         console.log(buf.slice(0, bytes).toString());
	      }
	   });
	});
}

//readBuffer('input.txt')

// Closing File
// Syntax
// Following is the syntax of one of the methods to close an opened file:

// fs.close(fd, callback)
// Parameters
// Here is the description of the parameters used:

// fd - This is the file descriptor returned by file fs.open() method.

// callback - This is the callback function which gets no arguments other than a possible exception are given to the completion callback.

 exports.openCloseWrite = function(input){
	var buf = new Buffer(1024);
	console.log("Going to open an existing file");
	fs.open(input, 'r+', function(err, fd) {
	   if (err) {
	       return console.error(err);
	   }
	   console.log("File opened successfully!");
	   console.log("Going to read the file");
	   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
	      if (err){
	         console.log(err);
	      }

	      // Print only read bytes to avoid junk.
	      if(bytes > 0){
	         console.log(buf.slice(0, bytes).toString());
	      }

	      // Close the opened file.
	      fs.close(fd, function(err){
	         if (err){
	            console.log(err);
	         } 
	         console.log("File closed successfully.");
	      });
	   });
	});
}

//openCloseWrite('input.txt')


// Truncate File
// Syntax
// Following is the syntax of the method to truncate an opened file:

// fs.ftruncate(fd, len, callback)
// Parameters
// Here is the description of the parameters used:

// fd - This is the file descriptor returned by file fs.open() method.

// len - This is the length of the file after which file will be truncated.

// callback - This is the callback function which gets no arguments other than a possible exception are given to the completion callback.

 exports.truncateFile = function(input, position){
	var buf = new Buffer(1024);

	console.log("Going to open an existing file");
	fs.open(input, 'r+', function(err, fd) {
	   if (err) {
	       return console.error(err);
	   }
	   console.log("File opened successfully!");
	   console.log("Going to truncate the file after "+position+" bytes");
	   
	   // Truncate the opened file.
	   fs.ftruncate(fd, position, function(err){
	      if (err){
	         console.log(err);
	      } 
	      console.log("File truncated successfully.");
	      console.log("Going to read the same file"); 
	      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
	         if (err){
	            console.log(err);
	         }

	         // Print only read bytes to avoid junk.
	         if(bytes > 0){
	            console.log(buf.slice(0, bytes).toString());
	         }

	         // Close the opened file.
	         fs.close(fd, function(err){
	            if (err){
	               console.log(err);
	            } 
	            console.log("File closed successfully.");
	         });
	      });
	   });
	});

}

//truncateFile('input.txt', 100)

// Delete File
// Syntax
// Following is the syntax of the method to delete a file:

// fs.unlink(path, callback)
// Parameters
// Here is the description of the parameters used:

// path - This is the file name including path.

// callback - This is the callback function which gets no arguments other than a possible exception are given to the completion callback.

 exports.deleteFile = function(input){
	console.log("Going to delete an existing file");
fs.unlink(input, function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("File deleted successfully!");
});
}

//deleteFile('input.txt')

// Create Directory
// Syntax
// Following is the syntax of the method to create a directory:

// fs.mkdir(path[, mode], callback)
// Parameters
// Here is the description of the parameters used:

// path - This is the directory name including path.

// mode - This is the directory permission to be set. Defaults to 0777.

// callback - This is the callback function which gets no arguments other than a possible exception are given to the completion callback.

 exports.mkDir = function(dirPath){
	console.log("Going to create directory "+dirPath);
fs.mkdir(dirPath,function(err){
   if (err) {
 
   	console.log(err.code)
         // if(err.code != 'EEXIST'){

         // 	 var funcTime = setTimeout(function(){retryMkDir(err)}, 2000)
         // }else{
         // 	clearTimeout(funcTime)
         // 	console.log("Directory "+dirPath+" EXISTS!!  EEXITS!");
         // }
        	

   }else{
   console.log("Directory "+dirPath+" created successfully!");
}
});

}

//mkDir('/home/sailor/nodeServers/nodeServers/nodeServers/nodeServers/nodeServers/nodeServers/')
var errorCount = 0
function retryMkDir(err){
	errorCount++
	console.log('errorCount '+errorCount)
	console.log('err in path '+err.path)
        	var newPath = err.path
        	pathArry = []
        	var init = 1
        	do{
        		console.log('Do Loop')
        		var i = newPath.indexOf('/', init)
        		var chunk = newPath.slice(init-1, i)
        		pathArry.push(chunk)
        		init = i+1
        	}while(i != -1)
        	console.log('path array length '+pathArry.length)
        	console.log(pathArry)
        	for(x = pathArry.length; x>-1;x--){
        		pathArry.pop()
        		console.log("type of "+typeof pathArry +pathArry)
        		newPath = pathArry.join("")
        		console.log(newPath)
        		fs.mkdir(newPath, function(err){
        			if(err) {
        				console.log(err)
        			// 	setTimeout(function(){
        			// 	retryMkDir(err)
        			// }, 1000)
        			}else{return console.log('badass recursive mkDIRRRR')}
        		})
        	}
}


// Read Directory
// Syntax
// Following is the syntax of the method to read a directory:

// fs.readdir(path, callback)
// Parameters
// Here is the description of the parameters used:

// path - This is the directory name including path.

// callback - This is the callback function which gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

 exports.readDir = function(dir){
	var fs = require("fs");

	console.log("Going to read directory "+dir);
	fs.readdir(dir,function(err, files){
	   if (err) {
	       return console.error(err);
	   }
	   files.forEach( function (file){
	       console.log( file );
	   });
	});
}

//readDir('/home/sailor/nodeServers/')


// Remove Directory
// Syntax
// Following is the syntax of the method to remove a directory:

// fs.rmdir(path, callback)
// Parameters
// Here is the description of the parameters used:

// path - This is the directory name including path.

// callback - This is the callback function which gets no arguments other than a possible exception are given to the completion callback.


 exports.rmDir = function(dir){
	var fs = require("fs");

	console.log("Going to delete directory "+dir);
	fs.rmdir(dir,function(err){
	   if (err) {
	       return console.error(err);
	   }
	  var pathArry = []
	   var init = 1
	   do{
	   	console.log('Do Loop')
	   	var i = dir.indexOf('/', init)
	   	var chunk = dir.slice(init-1, i)
	   	pathArry.push(chunk)
	   	init = i+1
	   }while(i != -1)
	   console.log('path array length '+pathArry.length)
	   console.log(pathArry)
	   console.log("Going to read directory ");
	   // fs.readdir("/tmp/",function(err, files){
	   //    if (err) {
	   //        return console.error(err);
	   //    }
	   //    files.forEach( function (file){
	   //        console.log( file );
	   //    });
	   // });
	});
}

//rmDir('/home/sailor/nodeServers/nodeServers/nodeServers/nodeServers/nodeServers/nodeServers/nodeServers/')