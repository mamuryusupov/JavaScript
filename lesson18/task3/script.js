// pseudo array

// function argsSum() {
//   // заимствовали функуию reduce у массива, применили конекст и передали стандартные аргументы
//   // apply c псевдо массивом
//   return [].reduce.apply(arguments, [
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   ]);
// call c псевдо массивом
// return [].reduce.call(
//   arguments,
//   (acc, elem) => {
//     return acc + elem;
//   },
//   0,
// );

// обычный массив с спред
// return [...arguments].reduce((acc, elem) => {
//     return acc + elem;
//   },
//   0,
// );
// }

// [].reduce((acc, elem) => {}, 0);

function sumOfSquares() {
  return [].reduce.apply(arguments, [
    (acc, elem) => {
      return acc + elem * elem;
    },
    0,
  ]);
}

console.log(sumOfSquares(1, 2, 3, 4));
