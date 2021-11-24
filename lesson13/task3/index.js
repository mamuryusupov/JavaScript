// in: array
// out: num
// 1. Loop and transform all elem of array into absolute nums
// 2. Find the min num from the array
// 3. Square the num and return
export const findMimSquareNum = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  const absoluteNums = array.map(el => Math.abs(el));
  const minNum = Math.min(...absoluteNums);
  return minNum * minNum;
};

const initialArr = [-777, 3, -2, 6, 45, -20];
console.log(findMimSquareNum(initialArr));
console.log(findMimSquareNum('Mamur'));
console.log(findMimSquareNum([]));
