var http = require('http');

http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Maratona Full Cycle 2.0');
  res.end();
}).listen(3000);