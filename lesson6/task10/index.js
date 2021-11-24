function cloneArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArr = [...array];

  return newArr;
}

const initialArray = [1, 2, 3, 99, 100];
console.log(initialArray);
const initialArray2 = [10, 20, 30, 990, 111];
console.log(initialArray2);

console.log(cloneArray(initialArray));
console.log(cloneArray(initialArray2));
