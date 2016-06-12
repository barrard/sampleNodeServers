var exports = module.exports = {}
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
// var url = 'mongodb://localhost/records';
var url = 'mongodb://localhost/myMongo';
// var url = 'mongodb://sysop:moon@localhost/records';
// var url = 'mongodb:///tmp/mongodb-27017.sock';


exports.connectToDatabse = function(pool){

// Connect to the db
MongoClient.connect(url, {'poolSize': pool}, function(err, db) {
	assert.equal(null, err);
   if(err) { return console.log(err);
   }else{

    console.log("We are connected to "+db+", poolSize = "+ pool);

      db.close();
  }
})

}

exports.myCollection = function(collection){
	// Connect to the db
	MongoClient.connect(url, function(err, db) {
	  if(err) { return console.dir(err); }
	  console.log(collection)

	//   db.collection(collection, function(err, collection) {
	//   console.log(collection)
	// });

	  db.collection(collection, {w:1}, function(err, collection) {
	  	console.log('Collection '+collection.name+' found or created')

	  	//Close connection
	  	  db.close();

	  });

	  // db.createCollection(collection, function(err, collection) {
	  // 	console.log(collection)
	  // });

	  // db.createCollection(collection, {w:1}, function(err, collection) {
	  // 	console.log(collection)
	  // });

	});

}




exports.insertDB = function(){

 insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    db.close();
  });
});

}



exports.updateDB = function(){

	var updateDocument = function(db, callback) {
	  // Get the documents collection
	  var collection = db.collection('documents');
	  // Update document where a is 2, set b equal to 1
	  collection.updateOne({ a : 2 }
	    , { $set: { b : 1 } }, function(err, result) {
	    assert.equal(err, null);
	    assert.equal(1, result.result.n);
	    console.log("Updated the document with the field a equal to 2");
	    callback(result);
	  });  
	}
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected correctly to server");
	    updateDocument(db, function() {
	      db.close();
	    });
	});

}

exports.removeDB = function(){
	
	var deleteDocument = function(db, callback) {
	  // Get the documents collection
	  var collection = db.collection('documents');
	  // Insert some documents
	  collection.deleteOne({ a : 3 }, function(err, result) {
	    assert.equal(err, null);
	    assert.equal(1, result.result.n);
	    console.log("Removed the document with the field a equal to 3");
	    callback(result);
	  });
	}

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected correctly to server");


	      deleteDocument(db, function() {
	        db.close();

	  });
	});




}

exports.removeCollection = function(collection){
	MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
	  if(err) { return console.dir(err); }

	   var col = db.collection(collection);
	  col.remove({w:1}, function(err, result){});

	  //Close connection
	    db.close();
	})


}



exports.findOneDB = function(docs, collection){
	MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
	  if(err) { return console.dir(err); }

	   var col = db.collection(collection);
	  col.findOne(docs, function(err, item) {
	  	if (!err) {console.log('Found it '+JSON.stringify(item))};
	  	return item
	  });
	  //Close connection
	    db.close();

	})
}

exports.findDB = function(){

	var findDocuments = function(db, callback) {
	  // Get the documents collection
	  var collection = db.collection('documents');
	  // Find some documents
	  collection.find({}).toArray(function(err, docs) {
	    assert.equal(err, null);
	    assert.equal(2, docs.length);
	    console.log("Found the following records");
	    console.dir(docs);
	    callback(docs);
	  });
	}

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected correctly to server");

	        findDocuments(db, function() {
	          db.close();
	        });
	      });
}