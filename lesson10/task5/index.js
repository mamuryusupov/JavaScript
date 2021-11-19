// 1) get new Arry with the length of argument
// 2) get random num and
// 3) chek if random num is whole otherwise return null
// 3) create new array with random numbers

const getRandomNumbers = (length, from, to) => {
    if (to - from < 1) {
        return null;
    }
    return new Array(length)
        .fill()
        .map(() => Math.floor(Math.random() * (to - from) + from));
};

// Array(length).fill().map(() => Math.abs(Math.random() * (to - from) + from));

console.log(getRandomNumbers(5, 1.4, 2.2));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));