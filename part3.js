const fs = require('fs');
const http = require('http');

var server = http.createServer();
server.on('request',(req,res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html', 'utf8')
  .pipe(res);
});
server.listen(8080, '127.0.0.1');
