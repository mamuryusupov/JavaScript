// 3) if substing is empty return null
// 1) loop through anystring
// 2) find substring in anystring or in empty string
// 4) Count number of subsrtings in the string

const countOccurrences = (text, str) => {
    if (str === "") {
        return null;
    }
    if (typeof text === "undefined") {
        return "".split(str).legnth - 1;
    }
    return text.split(str).length - 1;
};

console.log(countOccurrences("sdfsdfsdfdsdf", ""));

// const text1 = "fox fox fox foxy foxtrot";
// const str = "fox";
// console.log(text1.match(/(str)/g));
// console.log(text1.search(/fox/g));

// const text2 = "We went down to the stall, then down to the river.";

// console.log(text2.split("down").length - 1);