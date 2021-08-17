function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let minNum = arr[0];
    let maxNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
            console.log(minNum);
        }
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return minNum + maxNum > 1000;
}

console.log(checker([-1, 2, 3, 4, 5, 10, 20, 50, 89]));
console.log(checker([-1, 2, 3, 4, 5, 400, 10, 20, 500, 89, 200, 1500]));