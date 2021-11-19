const getKeys = (object) => {
    for (let key in object) {
        console.log(key);
    }
};

const user = {
    name: "Tom",
    age: 17,
};

console.log(getKeys(user));