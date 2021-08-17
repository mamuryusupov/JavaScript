function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let sumOfArr = [];
    for (let i = 0; i <= array.length - 1; i++) {
        let temporary = array[i];
        let j = 0;
        for (; j <= sumOfArr.length - 1; j++) {
            if (temporary === sumOfArr[j] && i !== j) {
                break;
            }
        }
        if (j >= sumOfArr.length) {
            sumOfArr.push(temporary);
            // result ++;
        }
    }

    return sumOfArr.length;
}

console.log(uniqueCount([2, 2, 7, 10, 10, 20, 21, 20]));
console.log(uniqueCount([2, 2, 7, 10, 10, 20, 21, 20, 4, 5, 4]));