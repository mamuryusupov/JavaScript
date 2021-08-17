// function removeDuplicates(array) {
//     if (!Array.isArray(array)) {
//         return null;
//     }

//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         let temp = array[i];
//         let j = 0;
//         for (; j < array.length; j++) {
//             if (temp === array[j] && i !== j) {
//                 break;
//             }
//         }
//         if (j >= arr.length) {
//             arr.push(temp);
//         }
//     }
//     return arr;
// }

//
function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let sortedElements = [];
    for (let i = 0; i <= array.length - 1; i++) {
        let temp = array[i];
        let j = 0;
        for (; j <= sortedElements.length - 1; j++) {
            if (temp === sortedElements[j] && i !== j) {
                break;
            }
        }
        if (j >= sortedElements.length) {
            sortedElements.push(temp);
        }
    }

    return sortedElements;
}
console.log(removeDuplicates([2, 2, 2, 4, 6, 7, 10, 10, 20, 21, 20]));