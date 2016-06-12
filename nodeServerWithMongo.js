
var http = require("http");
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/dave", {'poolSize': 50}, function(err, db) {
   if(err) { return console.dir(err); }

    console.log("We are connected");

var collection = db.collection('test');
  var doc = {mykey:1, fieldtoupdate:1};

  collection.insert(doc, {w:1}, function(err, result) {
    collection.update({mykey:1}, {$set:{fieldtoupdate:3}}, {w:1}, function(err, result) {result});
  });

  var doc2 = {mykey:2, docs:[{doc1:1}]};

  collection.insert(doc2, {w:1}, function(err, result) {
    collection.update({mykey:2}, {$push:{docs:{doc2:1}}}, {w:1}, function(err, result) {});
  });


//   var collection = db.collection('test');
//   var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

//   collection.insert(docs, {w:1}, function(err, result) {

//     collection.remove({mykey:1});

//     collection.remove({mykey:2}, {w:1}, function(err, result) {});

//     collection.remove();
// })


var docs = {mykey:2, docs:[{doc1:1}]};
    collection.insert(docs, {w:1}, function(err, result) {

      collection.find().toArray(function(err, items) {});

      var stream = collection.find({mykey:{$ne:2}}).stream();
      stream.on("data", function(item) {});
      stream.on("end", function() {});

      collection.findOne({mykey:1}, function(err, item) {
      	console.log(item)});

    });


    db.collection('test', function(err, collection) {
    	if (err) {console.log(err)};
    });

     db.collection('test', {w:1}, function(err, collection) {
     	if (err) {console.log(err)};
     });

     db.createCollection('test', function(err, collection) {
     	if (err) {console.log(err)};
     });

     db.createCollection('test', {w:1}, function(err, collection) {
     	if (err) {console.log(err)};
     });

     db.collection('noExist', {strict:true}, function(err, collection) {
     	if (err) {console.log(err)};
     });



  
});

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
