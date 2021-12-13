// var a;
// console.log(a);
// var a = 17;
// console.log(a);

// if (a) {
//   var a = 1;
//   console.log(a);
// }

// console.log(a);

// let a = 17;
// console.log(a);

// if (a) {
//   let a = 1;
//   console.log(a);
// }

// console.log(a);

var greeting = 'hello';
function sayHi() {
  greeting = 'Hi';
  console.log(greeting);
  if (false) {
    var greeting;
  }
}
sayHi();
console.log(greeting);
