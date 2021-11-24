// MultiRound

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
// num => []
const multiRound = num => [
  Math.round(num * 100) / 100,
  Math.floor(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  num.toFixed(2),
];
console.log(multiRound(18.3456));
console.log(multiRound(Math.PI));

(0.1 * 34 + 0.2 * 17).toFixed(2);
