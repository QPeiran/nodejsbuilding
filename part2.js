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

const fsPromises = fs.promises;
var data;
fsPromises.readFile("README.md")
//.then(console.log("promise resolved"));
//.then((data) => {console.log(data + "\n data loaded");})
.then((data) => fsPromises.writeFile("README.md", data + "\n data loaded"))

////////////////////////////section 7:
