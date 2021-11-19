const user = {
    name: "Tom",
    key: 17,
};

const concatProps = (obj) => Object.values(obj);

console.log(concatProps(user));

const copyObj = (obj) => {
    let copy = Object.assign({}, obj);
    return copy;
};
let initialObj = { "John Doe": 19, Tom: 17, Bob: 18 };
console.log(copyObj(initialObj));