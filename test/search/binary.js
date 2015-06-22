var assert = require('assert');
var search = require('../../src/search/binary');

describe('Binary Search', function() {
  it('find the correct element', function() {
    var arr = [1, 3, 6, 7, 8, 9, 10];
    var val = search(arr, 6);
    assert.equal(val, 2);
  });

  it('returns null if value is not present', function() {
    var arr = [1, 3, 6, 7, 8, 9, 10];
    var val = search(arr, 4);
    assert.equal(val, null);
  });
});
