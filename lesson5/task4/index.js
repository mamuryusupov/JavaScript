// Function declaration
// можно вызывать с любого места

// function getSquare(num) {
//     return num * num;
// }
// Function expression можно вызвать только после фунции
// Анонимная функция
// const getSum = function здесь можно написать имя функции(a, b) {
//     return a + b;
// };
// Стрелочная функция
// Короче запись. если 1 арг то можно без скобок. одна функция с return можно упустить фигурные скобки, всегда анонимная
// const getSquare = num => return num * num;

// const getSquare = (num) => {
//     return num * num;
// };

// const result = getSquare(5);
// console.log(result);

// arrow function

// function getSquare(num) {
//   return num * num;
// }

const getSquare = num => num * num;

const result = getSquare(5);
console.log(result);
