/* eslint-disable */

var foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }
  console.log(foo);
  return foo;
}

var foo = bar();
console.log(foo);

export default foo;
