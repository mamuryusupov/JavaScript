import { findMimSquareNum } from './index.js';

// findMimSquareNum = require('./index.js');
// test 1

it('should return null if argument is an empty array', () => {
  const result1 = findMimSquareNum([]);
  expect(result1).toEqual(null);
});

// test 2
it('should return null if argument is the string', () => {
  const result2 = findMimSquareNum('Mamur');
  expect(result2).toEqual(null);
});

// test 3
it('Should return the minim squared', () => {
  const result3 = findMimSquareNum([-777, 3, -2, 6, 45, -20]);
  expect(result3).toEqual(4);
});
