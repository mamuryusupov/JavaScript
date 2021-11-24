import { getAdults } from './filter.js';

it('should return object with users older than 18 ', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return object with users older than 18 ', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should return epmty object if there is not users older than 18 ', () => {
  const result = getAdults({ 'John Doe': 17, Tom: 10, Bob: 1 });
  expect(result).toEqual({});
});
