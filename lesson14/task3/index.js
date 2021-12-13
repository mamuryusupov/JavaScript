// 1. create number saver
// 2. create function to add argument to the num saver +
// 3. create function to decrease the num saver by argument
// 4. create function to reset the num saver
// 5. create function to reaturn number from num saver

// version 1

// let numSaver = 0;

// // First Func
// const add = num => {
//   // console.log(`${numSaver} + ${num} = `, (numSaver += num));
//   let saveNumLocal = numSaver + num;
//   return saveNumLocal;
// };

// const addSaved = add(10);
// console.log(addSaved);

// // Second Func

// const decrease = num => {
//   // console.log(`${numSaver} + ${num} = `, (numSaver -= num));
//   let saveNumLocal1 = addSaved - num;
//   return saveNumLocal1;
// };
// let decreaseSaved = decrease(3);
// console.log(decreaseSaved);

// // Reset Func

// const reset = () => {
//   // console.log(`${numSaver} = `, (numSaver = 0));
//   decreaseSaved = 0;
//   console.log(decreaseSaved);
// };
// reset();

// // getMemo Func

// const getMemo = () => {
//   // console.log(numSaver);
//   console.log(decreaseSaved, addSaved);
// };
// getMemo();

// console.log(numSaver);

// version 2

let numSaver = 0;

// First Func
const add = num => {
  numSaver += num;
  return numSaver;
};

console.log(add(10));

// Second Func

const decrease = num => {
  numSaver -= num;
  return numSaver;
};
console.log(decrease(2));

// Reset Func

const reset = () => {
  numSaver = 0;
  return numSaver;
};
console.log(reset());

// Reset Func

const getMemo = () => numSaver;

console.log(getMemo());
