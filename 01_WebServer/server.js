//Open the http module 
var http = require('http');


//http://nodejs.org/api/http.html#http_http_createserver_requestlistener

http.createServer(function (req, res) {
  //respond to web requests
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(9999, '127.0.0.1');

console.log('Server running at http://127.0.0.1:9999/');