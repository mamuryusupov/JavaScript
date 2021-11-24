// in: arr
// out: boolean
// arr [2, 3, 4] => arr [2 + 3 + 4] => sum > 100
// 1. Check arg is array
// 2. Loop the arr and add each elem to the sum
// 3. Check sum is > 100 true or false

function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let totalSum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    totalSum += arr[index];
  }

  return totalSum > 100;
}
const initialArray = [1, 2, 3, 99, 100];
console.log(checkSum(initialArray));
