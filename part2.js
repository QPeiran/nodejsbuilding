/**/
//////////////////////////////////////////////////////section 6: file system or module 'fs'
var fs = require('fs');
/*
fs.readFile('README.md', 'utf8', function(err, data){
  console.log(data.toString());
  fs.writeFile('txtFile.txt', data, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
});
*/
//fs.appendFileSync('txtFile.txt', 'Hello content!');
/*
fs.unlink('./text/txtFile.txt',function (err) {
  if (err) throw err;
  console.log('Deleted!');})*/
//fs.rmdirSync('text');

//all unlink, readFile and writeFile etc. need a callback function! which means all run asynchronously
//if you want run synchronously use Sync as suffix eg. appendFileSync, unlinkSync, readFileSync. etc
/*
//callback hell!
///link
fs.mkdir('./text', function (err){
  if (err) throw err;
  console.log('new path!');
  fs.readFile('README.md', 'utf8', function (err, data){
    if (err) throw err;
    console.log(data + "\n + data loaded");
      if (err) throw err;
      fs.appendFile('./text/txtFile.txt',data, function (err){
      console.log('Appended!');
      fs.writeFile('./text/txtFile.txt', data + 'Changed!', function (err) {
        console.log('Replaced!');
      })
    })
  })
});
//unlink
fs.unlink('./text/txtFile.txt', function (err) {
  if (err) throw err;
  console.log("file removed");
  fs.rmdir('text', function (err){
    if (err) throw err;
    console.log("path removed");
  })
})
*/
//smarter way to avoid callback hell by using promise chain
// note fsPromises is in beta
/*
const fsPromises = fs.promises;
var data;
fsPromises.readFile("README.md")
//.then(console.log("promise resolved"));
//.then((data) => {console.log(data + "\n data loaded");})
.then((data) => fsPromises.writeFile("README.md", data + "\n data loaded"))
*/
///////////////////////////section 7: stream & pipe
const http = require('http');
/*
var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile("README.md", 'utf8', (err,data) => {
    //console.log(data);
    res.write(data);
    res.end('Greetings from Peiran!');
  });
}).listen(8080, '127.0.0.1');  ///////////////readFile then res.write

var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(__dirname + '/README.md', 'utf8')
    .on('data', (chunks) => {
    console.log("new chunk ");
    console.log(chunks);
    fs.write(chunks);
    res.end('Greetings from Peiran again!');
  });
}).listen(8080, '127.0.0.1');  /////////////createReadStream then res.write
*/
////////////////res is a wirteable stream

var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(__dirname + '/README.md', 'utf8')
    .pipe(res);
},'request').listen(8080, '127.0.0.1');//the 'request' parameter can be either pos1 or pos2?
////////same as below
/*
var server = http.createServer();
server.on('request',(req,res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(__dirname + '/README.md', 'utf8')
  .pipe(res);
});
server.listen(8080, '127.0.0.1');

*/
//////////////////////////////////////////////////////
