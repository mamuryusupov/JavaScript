function sum(from, to) {
  let sumOfNums = 0;
  for (let i = from; i <= to; i += 1) {
    sumOfNums += i;
  }
  return sumOfNums;
}
console.log(sum(2, 10));
console.log(sum(3, 10));

function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}
console.log(compareSums(2, 10, 3, 10));
