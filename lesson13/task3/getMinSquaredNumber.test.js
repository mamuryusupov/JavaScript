import { getMinSquaredNumber } from "./getMinSquaredNumber.js";

it("should return null if empty array is passed", () => {
    const result = getMinSquaredNumber([]);
    expect(result).isEqual("null");
});

it("should return null if string is passed instead of array", () => {
    const result = getMinSquaredNumber("I am string");
    expect(result).isEqual("null");
});

it("should return the smallest squared num from the array", () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).isEqual(4);
});