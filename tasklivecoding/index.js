const squaredNumbers = (arr) => {
    const newArr = (number) => {
        return number * number;
    };
    return arr.map(newArr);
};

console.log(squaredNumbers([2, 5, 6, 7, 8]));

const getOddNumber = (arr) => {
    const firstOddNum = (number) => {
        if (number % 2 === 1) {
            return true;
        }
        return false;
    };
    return arr.find(firstOddNum);
};

const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log(getOddNumber(numbersList));

const getPositiveNumbers = (arr) => {
    const positiveNum = (number) => {
        if (number >= 0) {
            return number;
        }
        return false;
    };
    return arr.forEach(positiveNum);
};

console.log(getPositiveNumbers(numbersList));

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// put your code here

const getSumNumbers = (arr) => {
    const sum = (accum, number) => {
        return accum + number;
    };

    return arr.reduce(sum);
};
console.log(getSumNumbers(transactions));

console.log(transactions);