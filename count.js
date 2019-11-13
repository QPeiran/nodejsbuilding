/////////////All works without modifying app.js////////
/* Option 1:*/
module.exports = {
  counter : function (arr) {
    return 'There are ' + arr.length + ' elements in the array1.';
  },
  adder : function (a,b) {
    return `The sum of the 2 numbers is ${a+b}`;
  },
  pi : 3.1415926
}
/* Option 2:
class Count {
  constructor(author) {
    this.Attribute1 = author;
    this.pi = 3.1415926;
  }
  counter (arr) {
    return 'There are ' + arr.length + ' elements in the array1. ' + this.Attribute1;
  }
  adder (a,b) {
    return `The sum of the 2 numbers is ${a+b}`;
  }
}
module.exports = new Count('Peiran');
*/
/* Option 3:
module.exports.counter = function (arr) {
  return 'There are ' + arr.length + ' elements in the array1.';
}
module.exports.adder = function (a,b) {
  return `The sum of the 2 numbers is ${a+b}`;
}
module.exports.pi = 3.1415926;
*/
