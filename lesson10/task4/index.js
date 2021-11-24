// [-2, 6, 78, -99] => 99

// const getMaxAbsoluteNumber = arr => {
//   let max = -Infinity;
//   arr.forEach(num => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// };

const getMaxAbsoluteNumber = arr => {
  const absoluteValues = arr.map(num => Math.abs(num));
  const max = Math.max(...absoluteValues);
  return max;
};
console.log(getMaxAbsoluteNumber([-2, 6, 78, -99]));
