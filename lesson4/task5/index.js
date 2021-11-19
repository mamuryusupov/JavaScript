// input: Number;
// output: String;

// 1. Itterate up to n
// 2. Add each num to the sum

const n = 99;
let sum = '';

for (let i = 0; i <= n; i += 1) {
  sum += String(i);
}

console.log(sum);
