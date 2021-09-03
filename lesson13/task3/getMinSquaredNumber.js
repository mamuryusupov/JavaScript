export const getMinSquaredNumber = (array) => {
    if (!Array.isArray(array) ||
        typeof array === "undefined" ||
        array.length === 0
    ) {
        return null;
    }
    const squaredNums = array.map((num) => num * num);
    return Math.min(...squaredNums);
};

const arrayOfNumbers = [-777, 3, -2, 6, 45, -20];

console.log(getMinSquaredNumber(arrayOfNumbers));
console.log(getMinSquaredNumber("string"));
console.log(getMinSquaredNumber([]));