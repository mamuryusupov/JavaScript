export const reverseArray = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.slice().reverse();
};

const initialArray = [1, 2, 4, 5, 6, 9, 21];
console.log(reverseArray(initialArray));

const initialArray2 = [1, 2, 3, 99, 100];
const initialArray3 = [10, 20, 30, 990, 111];

console.log(reverseArray(initialArray2));
console.log(reverseArray(initialArray3));
