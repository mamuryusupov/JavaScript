import { calc } from "./calculator.js";

it("should return sum of numbers", () => {
    const sum = calc("2 + 3");
    expect(sum).isEqual("5");
});

it("should return difference of numbers", () => {
    const difference = calc("10 - 7");
    expect(difference).isEqual("3");
});

it("should return product of numbers", () => {
    const product = calc("8 * 7");
    expect(product).isEqual("56");
});

it("should return quotient of numbers", () => {
    const quotient = calc("21 / 3");
    expect(quotient).isEqual("7");
});