// Цикл while

// let n = 10;
// let sum = 0;
// while (n > 0) {
//     sum += n;
//     n--;
// }
// console.log("Result: " + sum);

// for (let i = 1; i <= 5; i++) {
//     console.log("\n => " + i + " <= \n\n");
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " x " + j + " = " + i * j);
//     }
// }

// //Restart
// //Безкончный цикл

// let n = 10;
// let sum = 0;

// while (n > 0) {
//     sum += n;
//     n--;
// }

// console.log("Result: " + sum);

// let n = 10;
// let sum = 0;
// while (n > 0) {
//   sum += n;
//   n -= 1;
// }
// console.log(sum);

// let m = 10;
// const n = 20;
// let result = 1;
// do {
//   if (m % 2 === 1) {
//     result *= m;
//   }
//   m += 1;
// } while (m <= n);

// console.log('Result : ' + result);

// Цикл For
let result = 1;
for (let m = 10; m <= 20; m += 1) {
  if (m % 2 === 1) {
    result *= m;
  }
}
console.log('Result : ' + result);
