import getSum, { getSquaredNumbers, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result1 = getSquaredNumbers([1, 2, 3]);
  expect(result1).toEqual([1, 4, 9]);
});

it('should get odd numbers', () => {
  const result2 = getOddNumbers([1, 2, 3, 5, 6, 7, 8, 9]);
  expect(result2).toEqual([1, 3, 5, 7, 9]);
});

it('should get sum of numbers', () => {
  const result3 = getSum(10, 15);
  expect(result3).toEqual(25);
});
