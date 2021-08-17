//Цикл do while

// let l = 10;
// const m = 20;
// let result = 1;

// do {
//     if (l % 2 === 1) {
//         result *= l;
//     }
//     l++;
// } while (l < m);
// console.log("Result: " + result);

// let result = 1;

// for (let l = 10; l <= 20; l++) {
//     if (l % 2 === 0) continue;
//     result *= l;
// }

// console.log("Result: " + result);
// const n = 100;
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log("result: ", sum);

// const n = 100;
// let i = 1;
// let sum = 0;

// while (i <= n) {
//     sum += i;
//     i++;
// }
// console.log("result: ", sum);

// const n = 100;
// let i = 1;
// let sum = 0;

// do {
//     sum += i;
//     i++;
// } while (i <= n);

// console.log("result: ", sum);

// let m = 20;
// const n = 40;
// let result = 1;

// do {
//     if (m % 2 === 1) {
//         result *= m;
//     }
//     m++;
// } while (m <= n);
// console.log(result);
//Restart

// let m = 10;
// const n = 20;
// let result = 1;

// do {
//     if (m % 2 === 1) {
//         result *= m;
//     }
//     m++;
// } while (m <= n);

// console.log("Result: " + result);

let result = 1;
for (let m = 10; m <= 20; m++) {
    // if (m % 2 === 0) {
    //     continue;
    // }
    if (m % 2 === 0) continue;

    result *= m;
}
console.log("Result: " + result);