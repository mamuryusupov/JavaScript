// 1. создать функцию savecalls
// input: function
// output: array

// 2. создать Пустой массив calls

// 3. создать функцию withMemory и присвоить эту функцию к  calls
//
// input: argument: number, string...
// output: array

export function saveCalls(func) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, arguments);
  }
  withMemory.calls = [];
  return withMemory;
}
const func = saveCalls();
console.log(func);

// test data
function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
console.log(testWithMemory(4, 2));
console.log(testWithMemory(9, 1));

console.log(testWithMemory.calls);

// test data with this

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);
methodWithMemory.apply({ name: Tom });
console.log(methodWithMemory.calls);
