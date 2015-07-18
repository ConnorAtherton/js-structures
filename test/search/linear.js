import assert from 'assert';
const search = require('../../dist/search/linear');

describe('Linear Search', () => {
  let arr

  describe('brute force', () => {
    beforeEach(() => {
      arr = [1, 3, 6, 7, 8, 9, 10];
    });

    it('find the correct element', () => {
      let val = search.brute(6, arr);
      assert.equal(val, 2);
    });

    it('returns null if value is not present', () => {
      let val = search.brute(4, arr);
      assert.equal(val, null);
    });
  });

  describe('reverse order', () => {
    beforeEach(() => {
      arr = [1, 3, 6, 7, 8, 9, 10];
    });

    it('find the correct element', () => {
      let val = search.reverse(6, arr);
      assert.equal(val, 2);
    });

    it('returns null if value is not present', () => {
      let val = search.reverse(4, arr);
      assert.equal(val, null);
    });
  });

  describe('recursive', () => {
    beforeEach(() => {
      arr = [1, 3, 6, 7, 8, 9, 10];
    });

    it('find the correct element', () => {
      let val = search.recursive(6, arr);
      assert.equal(val, 2);
    });

    it('returns null if value is not present', () => {
      let val = search.recursive(4, arr);
      assert.equal(val, null);
    });
  });

  describe('sentinel', () => {
    beforeEach(() => {
      arr = [1, 3, 6, 7, 8, 9, 10];
    });

    it('find the correct element', () => {
      let val = search.sentinel(6, arr);
      assert.equal(val, 2);
    });

    it('returns null if value is not present', () => {
      let val = search.sentinel(4, arr);
      assert.equal(val, null);
    });
  });
});
