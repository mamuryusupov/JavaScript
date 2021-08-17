function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    let temp;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(sortAsc([22, 11, 10, 5, 4, 3, 20, 50, 89]));