import assert from 'assert'
// import search from '../../dist/search/binary'
// TODO: fix these imports
const search = require('../../dist/search/binary')

describe('Binary Search', function() {
  describe('iterative', function() {
    it('find the correct element', function() {
      var arr = [1, 3, 6, 7, 8, 9, 10]
      var val = search.iterative(arr, 6)
      assert.equal(val, 2)
    })

    it('returns null if value is not present', function() {
      var arr = [1, 3, 6, 7, 8, 9, 10]
      var val = search.iterative(arr, 4)
      assert.equal(val, null)
    })
  })

  describe('recursive', function() {
    it('find the correct element', function() {
      var arr = [1, 3, 6, 7, 8, 9, 10]
      var val = search.recursive(arr, 6, 0, arr.length - 1)
      assert.equal(val, 2)
    });

    it('returns null if value is not present', function() {
      var arr = [1, 3, 6, 7, 8, 9, 10]
      var val = search.recursive(arr, 4, 0, arr.length - 1)
      assert.equal(val, null)
    })
  })
})
