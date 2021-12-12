import { expect } from 'chai';
import majorityElement from '../src/majorityElement';

describe('majorityElement', function() {
	it('evaluates [3,2,3] to be 3', function() {
		expect(majorityElement([3,2,3])).to.eq(3);
	});
	it('works for single element', function() {
		expect(majorityElement([9])).to.eq(9);
	});
});

