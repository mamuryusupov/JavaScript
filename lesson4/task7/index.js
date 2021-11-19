// input: number
// output: boolean

// 1. itterate from 0 to 1000
// 2. check if the number is odd
// 3. true: display found and add to the sum
// 4. Compare sum of odd nums and 5000
// 5. true: Bigger
//    false: Smaller

let sumOfOddNum = 0;
for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 !== 0) {
    console.log('Found');
    sumOfOddNum += i;
  }
}

if (sumOfOddNum * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}

console.log(sumOfOddNum);
