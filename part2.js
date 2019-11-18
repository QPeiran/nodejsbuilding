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
////////////////////////////section 7: Clients & Servers
const http = require('http');

var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.readFile("README.md", 'utf8', (err,data) => {
    //console.log(data);
    res.write(data);
    res.end('Greetings from Peiran again!');
  });
}).listen(8080, '127.0.0.1');

///////////////////////////section 8: readable and writeable stream

var myReadStream = fs.createReadStream(__dirname + '/README.md');

myReadStream.on('data', (chunk) => {
  console.log("new chunk ");
  console.log(chunk);
});
