// in: arr
// out: arr
// arr [2, 3, 4, 5, 6] => arr [2 * delta(2) + 4 * delta(2) + 6 * delta(2)] => arr [4  + 8 + 12]
// 1. Check arg is array
// 2. Check if the elem is Even
// 3. True => elem * delta number

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const [...copyArr] = arr;
  const newArr = [...copyArr];

  for (let index = 0; index < newArr.length; index += 1) {
    if (newArr[index] % 2 === 0) {
      newArr[index] += delta;
    }
  }
  return newArr;
}
const initialArray = [1, 2, 3, 99, 100];
console.log(increaseEvenEl(initialArray, 3));
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
