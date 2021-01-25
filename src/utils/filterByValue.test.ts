import filterByValue from './filterByValue';

const MOCK_DATA = [{ obj1: 'a' }, { obj2: 'b' }, { obj3: 'a' }, { obj4: 'c' }];

describe('filterByValue function', () => {
  it('should return any object that includes "a" in their values', () => {
    expect(filterByValue(MOCK_DATA, 'a')).toEqual([{ obj1: 'a' }, { obj3: 'a' }]);
  });
});
