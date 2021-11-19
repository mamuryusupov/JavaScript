// input: nums
// output: boolean

// 1. itterate from 0 to 1000 and get total sum
// 2. Devide the sum by 1234 to find mods
// 3. Substaract mods from sum and devide by 1234 to find div
// 4. Compare div and mod

let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  sum += i;
}

const mods = sum % 1234;
const div = (sum - mods) / 1234;
const result = div > mods;
