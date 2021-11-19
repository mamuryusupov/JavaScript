let result = 1;
for (let m = 10; m <= 20; m += 1) {
  if (m % 2 === 0) {
    continue;
  }
  result *= m;
}

console.log('Result : ' + result);
