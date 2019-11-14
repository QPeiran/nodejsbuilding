/* */
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

//////////////////////////////////////////////////////section 5:
const events = require('events');
const util = require('util');

const myEvent = new events();
myEvent.on('Trigger', (msg) => {console.log(`The trigger is calling you ${msg}`);})
myEvent.emit('Trigger',"badass");

function MyStream() {
    this.streamName = "Yolo";
}

util.inherits(MyStream, events.EventEmitter);


MyStream.prototype.write = function(data) {
    this.emit("data", data);
}
var stream = new MyStream();

//console.log(stream instanceof events.EventEmitter);
//console.log(MyStream.super_ === events.EventEmitter);
//console.log(stream.streamName);
stream.on("data", function(data) {
    console.log('Received data: "' + data + '"');
})
stream.write("It works!");

//////////////////////////////////////////////////////section 6: file system or module 'fs'
var fs = require('fs');

fs.readFile('README.md', 'utf8', function(err, data){
  console.log(data.toString());
  fs.writeFile('txtFile.txt', data, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
});
//both readFile and writeFile need a call back function!*/
