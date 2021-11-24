import { reverseArray } from './reversed.js';

it('shoud return reversed array', () => {
  const result = reverseArray([1, 2, 3, 99, 100]);
  expect(result).toEqual([100, 99, 3, 2, 1]);
});

it('shoud return reversed array', () => {
  const result = reverseArray([10, 20, 30, 990, 111]);
  expect(result).toEqual([111, 990, 30, 20, 10]);
});

it('shoud return null if argument is not array', () => {
  const result = reverseArray("I'm not array");
  expect(result).toEqual(null);
});
