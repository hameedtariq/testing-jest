import { toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  it('should return the uppercase value', () => {
    expect(toUpperCase('abc')).toBe('ABC');
  });
});
