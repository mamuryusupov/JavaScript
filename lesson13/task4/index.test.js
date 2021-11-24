import { calc } from './calculator.js';

it('should return result of addition', () => {
  const result1 = calc('1 + 2');
  expect(result1).toEqual('1 + 2 = 3');
});

it('should return result of substraction', () => {
  const result2 = calc('10 - 8');
  expect(result2).toEqual('10 - 8 = 2');
});

it('should return result of multiplication', () => {
  const result3 = calc('7 * 8');
  expect(result3).toEqual('7 * 8 = 56');
});

it('should return result of devision', () => {
  const result4 = calc('20 / 4');
  expect(result4).toEqual('20 / 4 = 5');
});

it('should return null if element is not a string', () => {
  const result4 = calc([1, 2, 3]);
  expect(result4).toEqual(null);
});
