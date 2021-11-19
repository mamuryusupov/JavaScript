//

const splitString = (string, len) => {
    if (typeof string !== "string") {
        return null;
    }
    if (len === 0 || typeof len === "undefined") {
        len = 10;
    }

    const result = [];
    const start = 0;
    for (let i = start; i < string.length; i += len) {
        // let chunk = string.slice(i, (i += len));
        const chunk = string.substr(i, len);
        const firstLetter = chunk[0].toUpperCase();
        const restOfChunk = chunk.slice(1);
        result.push(firstLetter + restOfChunk);
    }

    return result.join("\n");
};

console.log(splitString("abcdefghijklmnope sdfsdfsdfasdf", 3));
console.log(splitString("abcdefghijklmnope", 0));
console.log(splitString("abcdefghijklmnope"));