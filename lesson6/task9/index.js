// in: arr
// out: arr
// 1. Check arg is array
// 2. Check if the elem is Even
// 3. True => elem * delta number

function reverseArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArr = [...array];
  const reversedArray = [];

  for (let index = newArr.length - 1; index >= 0; index -= 1) {
    reversedArray.push(newArr[index]);
  }
  return reversedArray;
}

const initialArray = [1, 2, 3, 99, 100];
const initialArray2 = [10, 20, 30, 990, 111];

console.log(reverseArray(initialArray));
console.log(reverseArray(initialArray2));
