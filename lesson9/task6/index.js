const getPeople = (obj) => {
    let valuesOfObj2 = Object.values(obj).flat();

    let changedArray = valuesOfObj2.map((elem) => {
        return elem.name;
    });

    return changedArray;
};

let rooms = {
    room1: [
        { name: "Jack" },
        { name: "Andrey" },
        { name: "Ann" },
        { name: "Vasyl" },
    ],
    room2: [{ name: "Dan" }],
    room3: [
        { name: "Denis" },
        { name: "Max" },
        { name: "Alex" },
        { name: "Pavel" },
    ],
};

console.log(getPeople(rooms));