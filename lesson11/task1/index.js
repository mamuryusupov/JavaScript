/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// // 'I'm a strudent' // будет ошибка
// // "I'm a strudent" // нужно комбинировать
// // `I'm a strudent` // нужно комбинировать

// const text = "message";

// const myMessage = `
// The text is ${text.toUpperCase()}, \n\nAnd something else.`;
// console.log(myMessage);

// console.log(text[0]);// доступ к элементу
// console.log(text[text.length -1]);// доступ к элементу
// console.log(text[text.length]);// доступ к элементу
// // Метод charAt
// console.log(text.charAt(text.length));// должна быть пустая строка
// // Строки в отличии от массивов не изменяются

// text[2] = 'Q';
// console.log(text);

// // Метод concat
// console.log(text.concat('secondPart'));

// // Метод split = делит строку по определенному символу

// console.log('text'.split(''));
// console.log('text'.split());
// console.log("text texty texting".split(" ", 3));
// // console.log('text'.split('e'));

// // // Поиск подстроки в строке

// console.log("text text".indexOf("te"));
// console.log("text text".lastIndexOf("te"));
// console.log("text text".match(/text/g));
// console.log("text text".search(/text/g));

// console.log("text text".includes("te"));
// console.log("text text".startsWith("te"));
// console.log("text text".endsWith("xt"));

// // Доступ к определенному элементу строки
// console.log('text text'.charAt(0));
// console.log('text text'.charCodeAt(3));

// console.log('some '.concat('text'));
// console.log('text '.repeat(2));
// console.log('text'.replace(/t/g, 'T'));
// console.log(' text  '.trim());
// console.log("some text".split(" "));
// // Возвращает кусок строки, можно задать отрицаетльное значение
// console.log("some text".slice(2, 6));

// console.log("some text".substr(2, 3));
// // // Работает как слайс
// console.log("some text".substring(2, 3));

// // Приводит все символы в опр регистры
// console.log('some text'.toUpperCase());
// console.log('Text Text'.toLowerCase());

// Задача

// Split text

// splitString('abcd efgh',[4] => 'Abcd\n efg\n...')

// const splitText = (text, len) => {
//     const strArr = [];
//     let startPosition = 0;
//     while (true) {
//         let chunk = text.substr(startPosition, len);

//         if (chunk.length === 0) {
//             break;
//         }
//         strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//         startPosition += len;
//     }

//     return strArr.join("\n");
// };

// 1. 'abcdefg', 4 => ['abcd', efg ] => ['Abcd', 'Efg']
// 2. => 'Abcd/nEfg'

// console.log(splitText("abcdefg", 4));

// const splitString = (text, len = 10) => {
//     let result = [];
//     let startingPoint = 0;

//     while (startingPoint <= text.length) {
//         let chunk = text.slice(startingPoint, (startingPoint += len));
//         result.push(chunk);
//     }
//     return result;
// };

// console.log(splitString("abcdefghijklmnope", 0));

// if (typeof text !== "string") {
//     return null;
// }
// if (len === 0) {
//     len = 10;
// }

// while (true) {
//     let chunk = text.substr(startPoint, len);

//     if (chunk.length === 0) {
//         break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPoint += len;
// }
// return strArr.join("\n");

// 1. 'abcdefg', 4 => ['abcd', efg ] => ['Abcd', 'Efg']
// 2. => 'Abcd/nEfg'

// const splitString = (string, len) => {
// if (typeof string !== "string") {
//     return null;
// }
// if (len === 0 || typeof len === "undefined") {
//     len = 10;
// }

// let result = [];
// let start = 0;
// for (let i = start; i < string.length; i += len) {
//     // let chunk = string.slice(i, (i += len));

//     let chunk = string.substr(i, len);
//     console.log(chunk);
//     result.push(chunk);
// }

//     return result;
// };

// console.log(splitString("abcdefghijklmnope", 3));
// console.log(splitString("abcdefghijklmnope", 0));
// console.log(splitString("abcdefghijklmnope"));

// const text = 'message';
// const myMessage = `The text is ${text.toUpperCase()},\nAnd something else.
// `;
// console.log(myMessage);

// console.log(text[0]);
// console.log(text[text.length]);
// console.log(text.charAt(text.length));

// text[2] = 'Q';

// console.log('text'.concat('asd'));
// console.log('text'.split(''));

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

// 1. 'abcdefg' => ['abcd', 'efg] => ['Abcd', 'Efg]
// => 'Abcd/nEfg'
console.log(splitText('abcdefg', 4));
