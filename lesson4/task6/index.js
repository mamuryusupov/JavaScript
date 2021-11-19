// input: Number;
// output: Number;

// 1. Itterate from start to end
// 2. Devide the number by another number
// 3. If the num is aliquate to certain number so apply math operation

const start = 2;
const end = 100;
let result = 0;

for (let i = start; i <= end; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }
}

console.log(result);
