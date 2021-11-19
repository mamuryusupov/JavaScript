// const cleanTransactionList = (array) => {
// const mapArray = array.map((element) => {
//         const toString = element.toString();
//         const trimmed = toString.trim();
//         const mathEl = Math.floor(trimmed * 100) / 100;
//         return '$' + mathEl;
//     });

// const filtered = mapArray.filter((element) => {

//     const containLetter = /\d/;
//     return element.match(containLetter);

// })
// return filtered;

// };

// const toString = String(element);
// const includeWhiteSpace = /\s/g;
// const includeLetters = /\D/g;

// if (toString.match(includeWhiteSpace)) {
//     toString.trim();
// }
// if (toString.match(includeLetters)) {
//     array.pop(toString);
// }
// return toString;;

//         return "$" + String(Math.floor(element * 100) / 100);
//     });

const cleanTransactionList = (array) =>
    array
    .map((element) => {
        const mathEl = Number(element);
        const toFixedNum = mathEl.toFixed(2);
        const trimmed = toFixedNum.trim();
        return "$" + trimmed;
    })
    .filter((element) => {
        const containLetter = /\d/gi;
        return element.match(containLetter);
    });

const initialTransaction = [
    "  1.93434343434  ",
    "16.4232323",
    17,
    " 1 dollar ",
];
console.log(initialTransaction);
console.log(cleanTransactionList(initialTransaction));
console.log(initialTransaction);