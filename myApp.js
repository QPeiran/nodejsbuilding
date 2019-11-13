/*
//////////////////////////////////////////////////////////////section 1: setInterval
var time = 0;
var timer = setInterval(() => {
  time += 2;
  console.log('Greeeetings!' + time + "sec");
  if (time >= 5){
    clearInterval(timer);
  }
},2000);
////////////////////////////////////////////////////////////////section 2:
console.log(__dirname);
console.log(__filename);
//////////////////////////////////////////////////////////////section 3: function chain
var sayBye = function(x){
  console.log('bye ' + x);
};
sayBye("Kunkka");

function callBye(fun){
  fun("SF");
}
callBye(sayBye);
/////////////////////////////////////////////////////////////section 4: module and requir()

const MyCount = require('./count');;
console.log(MyCount.counter(['Red','Green','Blue']));
console.log(MyCount.adder(5,9));
console.log(MyCount.adder(5, MyCount.pi));
*/
//////////////////////////////////////////////////////section 5: file system or module 'fs'
var fs = require('fs');

fs.readFile('README.md', 'utf8', function(err, data){
  console.log(data.toString());
  fs.writeFile('txtFile.txt', data, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
});
