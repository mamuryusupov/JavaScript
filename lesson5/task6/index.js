// input: num
// output: undefined

// 1.

function getPrimes(num) {
  for (let i = 1; i <= num; i += 1) {
    let isPrime = true;
    console.log(i);
    for (let j = 2; j < i; j += 1) {
      console.log(j);
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (i > 1 && isPrime) {
      console.log(i);
    }
  }
}
console.log(getPrimes(10));
