import { withdraw } from './withdraw.js';

it('shoud withrdaw amount of money from balance if it is enough ', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it("shoud return -1 if client's name doesn' exisht in the list ", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Mamur', 1400);
  expect(result).toEqual(-1);
});

it("shoudn't withrdaw amount of money from balance if it isn't enough ", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
