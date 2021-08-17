// function getEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "even";
//     }
//     return "odd";
// }

// console.log(getEvenOdd(5));

// function getSum(num1, num2) {
//     let sum = 0;
//     for (let i = num1; i <= num2; i++) {
//         if (num1 % 2 === 0) {
//             sum += num1;
//         }
//     }
//     return sum;
// }

// console.log(getSum(10, 20));

// function increaser(a, index) {
//     if (a > index) {
//         return a + index;
//     }
//     return a;
// }

// console.log(increaser(30, 20));

// function sum(from, to) {
//     let sum = 0;
//     for (let i = from; i <= to; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function compareSums(a, b, c, d) {
//     if (sum(a, b) > sum(c, d)) {
//         return true;
//     }
//     return false;
// }
// console.log(compareSums(5, 10, 20, 30));

// console.log(sum(5, 10));
// console.log(sum(20, 30));

function findDivCount(a, b, n) {
    let resultOfDivs = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            resultOfDivs++;
        }
    }
    return resultOfDivs;
}
console.log(findDivCount(2, 12, 3));