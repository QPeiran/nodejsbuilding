////////////////////////secton 8: routing to serve diffent contents
const fs = require('fs');
const http = require('http');

var server = http.createServer();
server.on('request', (req,res) => {
  console.log('request was made: ' + req.url);
  if (req.url === '/' || req.url === '/home')
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8')
    .pipe(res);
  }
  else if (req.url === '/api')
  {
      res.writeHead(200, {'Content-Type': 'application/json'});
      fs.promises.readFile(__dirname + '/ExampleJSON.json', 'utf8')
      .then((data) => {
        let pdl = JSON.parse(data);
        res.write(pdl.name + " is " + pdl.age + " years old");
        res.end(", born in " + pdl.city);
      });
      //.then()
  }
  else
  {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("404 BAD request!");
  }
});
server.listen(8080, '127.0.0.1');
