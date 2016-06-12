// Creating Web client using Node
// A web client can be created using http module. Let's check the following example.
//var request = require('request')



var http = require('http');

// Options to be used by request 
var options = {
   method:'get',
   protocol: 'http:',
   host: 'google.com',
   port: '80',
   // headers :{
   //    'Custom Header info':'Yeah buddy'
   // },
   path: '/'  
};

// Callback function is used to deal with response
var callback = function(response){
   console.log('start___________________________')
   // console.log('response._events '+response._events)
   // for(k in response._events){
   //    console.log(k+' : '+_events[k])
   // }
   // console.log('response._events '+response._events)
   console.log('REQ '+response.req)
   // for(k in response) {
   //    console.log(k+' : '+response[k])
   // }
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      console.log('DATA')
      body += data;
   });
   
   response.on('end', function() {
      console.log('end');
      // Data received completely.
      //console.log(body);

   });
}

// Make a request to the server
//req is a writable stream
var req = http.request(options, callback);
console.log(req)