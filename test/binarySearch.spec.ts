import { expect } from 'chai';
import binarySearch from '../src/binarySearch';

describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch([], 1)).to.equal(-1);
     expect(binarySearch([1], 1)).to.equal(0);
     expect(binarySearch([1, 2], 1)).to.equal(0);
    expect(binarySearch([1, 2], 2)).to.equal(1);
    expect(binarySearch([1, 5, 10, 12], 1)).to.equal(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).to.equal(5);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).to.equal(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).to.equal(7);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).to.equal(-1);
  });
});

