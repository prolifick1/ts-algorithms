import isValidParentheses from '../src/isValidParentheses';
import { expect } from 'chai';


describe('isValidParentheses', () => {
  it('returns true for \(\)', () => {
    expect(isValidParentheses('()')).to.equal(true);
  });
  it('returns true for \(\)\[\]\{\}', () => {
    expect(isValidParentheses('()[]{}')).to.equal(true);
  });
  it('returns true for \(\]', () => {
    expect(isValidParentheses('(]')).to.equal(false);
  });
  it('returns true for \(\[\)\]', () => {
    expect(isValidParentheses('([)]')).to.equal(false);
  });
  it('returns true for \{\[\]\}', () => {
    expect(isValidParentheses('{[]}')).to.equal(true);
  });
});


