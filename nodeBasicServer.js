var http = require('http');
var fs = require('fs');
var url = require('url');
var filesys = require('./nodeFileSystem.js')
var mongoDB = require('./mongoDB.js')

// var db = mongoDB.myCollection('BigSwell')


//mongoDB.connectToDatabse(50)


 // mongoDB.myCollection('MyMongoAPI')

  var tpsReports = [{1:'my', 2:'your', 3:'we\'re', 4:'good', 5:'bad', 6:'seven', 7:'nine'}]

  //mongoDB.insertDB(tpsReports, 'my')

 //  mongoDB.insertDB(tpsReports, 'anyKinneBase')

 //mongoDB.insertDB()

 // mongoDB.updateDB()
 
//mongoDB.removeDB()

// mongoDB.findOneDB({5:'bad'}, 'MORETESTING')
 mongoDB.findDB()
//filesys.asyncRead('input.txt')


// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err+" first");
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain

         fs.readFile(pathname.substr(), function (err2, data) {
            if (err) {
               console.log(err2+" Second");
               // HTTP Status: 404 : NOT FOUND
               // Content Type: text/plain
               response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                  //Page found     
                  // HTTP Status: 200 : OK
                  // Content Type: text/plain
                  response.writeHead(200, {'Content-Type': 'text/html'});  
                  
                  // Write the content of the file to response body
                  response.write(data.toString());    
               }

            })
      }else{	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
