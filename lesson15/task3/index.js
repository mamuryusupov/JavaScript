export const createCalculator = () => {
  let memory = 0;

  console.log(memory);

  function add(num) {
    memory += num;
    return memory;
  }
  function decrease(num) {
    memory -= num;
    return memory;
  }
  function reset() {
    memory = 0;
    return memory;
  }
  function getMemo() {
    return memory;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();
// console.log(createCalculator());
console.log(calculator1.add(10000));
console.log(calculator1.decrease(2));
console.log(calculator1.reset());
console.log(calculator1.getMemo());

// let sum = 0;
// console.log(sum);
// function addNum(num) {
//   sum += num;
//   return sum;
// }
