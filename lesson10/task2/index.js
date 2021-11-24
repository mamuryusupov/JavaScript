// parsing

console.log(parseInt(' 17.17text'));
console.log(Number.parseInt(' 17.17text'));
console.log(Number.parseInt('seventeen'));

console.log(parseFloat(' 17.17text'));
console.log(Number.parseFloat(' 17.17text'));
console.log(Number.parseFloat('seventeen'));

console.log(parseFloat === Number.parseFloat);

const parseArray = arr => arr.map(el => Number.parseFloat(el));
const elementList = [4, 5.6, '   5.7kl ', null, Infinity, undefined];
console.log(parseArray(elementList));
